
def promptfunc(songfeed):

    prompt_recommend = f"""
    Given a users song feed, use the semantic meaning \
    from the titles and the genres of the song feed \
    to recommend 3 songs from it.

    The sond feed is delimited by triple backticks\
    ```{songfeed}```

    The output should be in json format.
    no block brackets at both end

    Do not use a number as key eg '1','2'.\

    Just give me a json with the 3 songs
    Do not remove any key-value pair from the original \
    song feed.
    """

    return prompt_recommend