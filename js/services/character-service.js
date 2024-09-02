const charUrl = 'http://stapi.co/api/v1/rest/character?uid=CHMA0000261620';

async function getCharacterData() {
    const response = await fetch(charUrl);
    const characterData = await response.json();

    const episodesIds = characterData.episodes.map(episode => episode.id);
    const movieIds = characterData.movies.map(movie => movie.id);

    //Fetch episodes
    const episodeData = await Promise.all(
        episodesIds.map(episodeId => {
            const episodeUrl = 'http://stapi.co/api/v1/rest/episode?uid=${uid}';
            return fetch(episodeUrl).then(response => response.json());
        })
    );

    //Fetch movies
    const movieData = await Promise.all(
        moviesIds.map(movieId => {
            const movieUrl = 'http://stapi.co/api/v1/rest/movie?uid=${uid}';
            return fetch(movieUrl).then(response => response.json());
        })
    );
    
    const episodes = episodeData.map(episode => ({
        uid: episode.uid,
        title: episode.title,
        seasonNumber: episode.seasonNumber,
        episodeNumber: episode.episodeNumber,
        usAirDate: episode.usAirDate 
    }));
    
    const movies = movieData.map(movie => ({
        uid: movie.uid,
        title: movie.title,
        usReleaseDate: movie.usReleaseDate
    }))

    const characterRelations = characterData.characterRelations
        .filter(relation => relation.target.uid !== 'CHMA0000261620' && relation.source.uid !== 'CHMA0000261620')
        .map(relation => ({
        type: relation.type,
        character: relation.target.name
    }));
    
    const titles = characterData.titles.map(title => ({
        uid: title.uid,
        name: title.name
    }))

    const organizations = characterData.organizations.map(organization => ({
        uid: organization.uid,
        name: organization.name
    }))

    return {
        episodes,
        movies,
        characterRelations,
        titles,
        organizations,
    };
}

