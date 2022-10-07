import requests
from parsel import Selector

from exemplo_scrape import URL_BASE


import requests


response = requests.get("https://api.github.com/users")
users = response.json()
for user in users:
    print(f"user['login'] user['url']")

