import os
import json
import openai
import requests
from dotenv import load_dotenv

load_dotenv()

openai_key = os.getenv('OPENAI_API_KEY')
rapid_api_key = os.getenv('RAPIDAPI_API_KEY')

openai.api_key = openai_key

URL1 = "https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world"
URL2 = "https://shazam-core7.p.rapidapi.com/songs/get_details"

HEADERS = {
	"X-RapidAPI-Key": rapid_api_key,
    "X-RapidAPI-Host": "shazam-core7.p.rapidapi.com"
}


def querySongs():
    querytops = {"term":"Sorry"}
    response = requests.get(URL1, headers=HEADERS, params=querytops).json()
    return response


def add_genres(songs):
    for take in songs:
        queryparams = {'id':take['key']}
        
        response = requests.get(URL2, headers=HEADERS, params=queryparams).json()
        
        try:
            take['genre'] = response['genres']['primary']
            take['image'] = response['images']['coverart']
            take['audio'] = response['hub']['actions'][1]['uri']
        except:
            take['genre'] = 'Pop'
            pass
        pass

    return songs


def preparesongs(response):
    here = {}
    hold = []

    for take in response:
        here['key'] = take['key']
        here['artist'] = take['subtitle']
        here['title'] = take['title']
    
        hold.append(here.copy())

    hold = add_genres(hold)
    return hold

def get_completion(prompt, model="gpt-3.5-turbo"):
    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0,
    )
    return response.choices[0].message["content"]

