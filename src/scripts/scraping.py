import requests
import json
from bs4 import BeautifulSoup

fichierJson = "../../public/data/donnees.json"
data = []

def urlScrap(url):
    response = requests.get(url)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")

    titles = soup.find_all(class_="item-infos-title")
    types = soup.find_all(class_="item-infos-type")
    buttons = soup.find_all("button", class_="btn btn-booking")

    
    print(f"Scraping {url}")
    print(f"Titles found: {len(titles)}")
    print(f"Types found: {len(types)}")
    print(f"Buttons found: {len(buttons)}")


    for title in titles:
        for type_elem in types:
            for button in buttons:
                link = button.get("data-link")
                data.append({
                    "title":title.getText(strip=True),
                    "type":type_elem.getText(strip=True),
                    "link":link
                })
                break
            break


def addJson(data):
    try:
        with open(fichierJson, "r") as fichier:
            data_old = json.load(fichier)
    except(FileNotFoundError, json.JSONDecodeError):
        data_old = []
    data_old.extend(data)

    with open(fichierJson, "w") as fichier:
        json.dump(data, fichier, indent=4)
        print("Les données ont été ajoutées au fichier donnees.json")

def ecraserJson(data):

    with open(fichierJson, "w") as fichier:
        json.dump(data, fichier, indent=4)
        print("les données on été écrites dans le fichier donnees.json")




for i in range(1,17):
    url = f"https://www.montpellier-tourisme.fr/sejourner/loisirs-et-activites/tous-les-loisirs-et-activites/?listpage={i}"
    urlScrap(url)


addJson(data=data)