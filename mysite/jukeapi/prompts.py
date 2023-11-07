
def promptfunc(songfeed):

    prompt_recommend = f"""
    Given a users song feed, use the semantic meaning \
    from the titles and the genres of the song feed \
    to recommend 5 songs from it.

    The sond feed is delimited by triple backticks\
    ```{songfeed}```

    The output should be in json format.
    no block brackets at both end

    Do not use a number as key eg '1','2'.\

    Just give me a json with the 5 songs
    
    shuffle the items in the list of the 'songs' key-value
    """

    return prompt_recommend


def happy_prompt(songfeed):

    prompt_recommend = f"""
    Given a users song feed, use the semantic meaning \
    from the titles and the genres of the song feed \
    to recommend 5 songs that are great to listen to \
    when the user is feeling Happy.

    The sond feed is delimited by triple backticks\
    ```{songfeed}```

    The output should be in json format.
    no block brackets at both end

    Do not use a number as key eg '1','2'.\

    Just give me a json with the 5 songs

    
    shuffle the items in the list of the 'songs' key-value
    """

    return prompt_recommend


def sad_prompt(songfeed):

    prompt_recommend = f"""
    Given a users song feed, use the semantic meaning \
    from the titles and the genres of the song feed \
    to recommend 5 songs that are great to listen to \
    when the user is feeling Sad.

    The sond feed is delimited by triple backticks\
    ```{songfeed}```

    The output should be in json format.
    no block brackets at both end

    Do not use a number as key eg '1','2'.\

    Just give me a json with the 5 songs
    
    shuffle the items in the list of the 'songs' key-value
    """

    return prompt_recommend


def moody_prompt(songfeed):

    prompt_recommend = f"""
    Given a users song feed, use the semantic meaning \
    from the titles and the genres of the song feed \
    to recommend 5 songs that are great to listen to \
    when the user is feeling Moody.

    The sond feed is delimited by triple backticks\
    ```{songfeed}```

    The output should be in json format.
    no block brackets at both end

    Do not use a number as key eg '1','2'.\

    Just give me a json with the 5 songs

    shuffle the items in the list of the 'songs' key-value
    """

    return prompt_recommend


def joyful_prompt(songfeed):

    prompt_recommend = f"""
    Given a users song feed, use the semantic meaning \
    from the titles and the genres of the song feed \
    to recommend 5 songs that are great to listen to \
    when the user is feeling Joyful.

    The sond feed is delimited by triple backticks\
    ```{songfeed}```

    The output should be in json format.
    no block brackets at both end

    Do not use a number as key eg '1','2'.\

    Just give me a json with the 5 songs
    
    shuffle the items in the list of the 'songs' key-value
    """

    return prompt_recommend

    
def sleepy_prompt(songfeed):

    prompt_recommend = f"""
    Given a users song feed, use the semantic meaning \
    from the titles and the genres of the song feed \
    to recommend 5 songs that are great to listen to \
    when the user is feeling sleepy.

    The sond feed is delimited by triple backticks\
    ```{songfeed}```

    The output should be in json format.
    no block brackets at both end

    Do not use a number as key eg '1','2'.\

    Just give me a json with the 5 songs

    shuffle the items in the list of the 'songs' key-value
    """

    return prompt_recommend