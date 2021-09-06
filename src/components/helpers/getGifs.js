

export const getGift = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=20&api_key=n2MTy7GMEz0cmwClmxg5msNG1C1Bz4Tm`;
    const r = await fetch( url );
    const { data } = await r.json();

    const gifs = await data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    });
    return(gifs);

};