const charUrl = 'http://stapi.co/api/v1/rest/character?uid=CHMA0000261620';

async function getCharacterData() {
    const response = await fetch(charUrl);
    const characterData = await response.json();

    const personalInfo = {
        name: characterData.name,
        yearOfBirth: characterData.birthYear,
        yearOfDeath: characterData.deathYear,
        placeOfBirth: characterData.birthPlace,
        placeOfDeath: characterData.deathPlace
    };

    const performerData = await Promise.all(
        performerIds.map(performerId => {
            const episodeUrl = `http://stapi.co/api/v1/rest/performer?uid=${performerId}`;
            return fetch(episodeUrl).then(response => response.json());
        })
    );
    const performer = performerData.map(performer => ({
        name: performer.name,
        birthYear: performer.birthYear,
        placeOfBirth: performer.placeOfBirth,
    }));

    const episodesIds = characterData.episodes.map(episode => episode.id);
    const movieIds = characterData.movies.map(movie => movie.id);
    
    //Fetch episodes
    const episodeData = await Promise.all(
        episodesIds.map(episodeId => {
            const episodeUrl = `http://stapi.co/api/v1/rest/episode?uid=${episodeId}`;
            return fetch(episodeUrl).then(response => response.json());
        })
    );

    //Fetch movies
    const movieData = await Promise.all(
        movieIds.map(movieId => {
            const movieUrl = `http://stapi.co/api/v1/rest/movie?uid=${movieId}`;
            return fetch(movieUrl).then(response => response.json())
        })
    );
    
    const episodes = episodeData.map(episode => ({
        title: episode.title,
        seasonNumber: episode.seasonNumber,
        episodeNumber: episode.episodeNumber,
        usAirDate: episode.usAirDate 
    }));
    
    const movies = movieData.map(movie => ({
        title: movie.title,
        usReleaseDate: movie.usReleaseDate
    }))

    const characterRelations = characterData.characterRelations
        .filter(relation => relation.target.uid !== `CHMA000026160` && relation.source.uid !== `CHMA0000261620`)
        .map(relation => ({
        type: relation.type,
        character: relation.target.name
    }));
    
    const titles = characterData.titles.map(title => ({
        name: title.name
    }))

    const organizations = characterData.organizations.map(organization => ({
        name: organization.name
    }))

    return {
        personalInfo,
        performer,
        episodes,
        movies,
        characterRelations,
        titles,
        organizations,
    };
}