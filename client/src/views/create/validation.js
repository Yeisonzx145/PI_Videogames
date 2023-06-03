const validation = (data,errors) =>{
    const error = {...errors}

    //* Name
    if(!data.name){
        error.name = '*';
    }else if(data.name.length > 35){
        error.name = '*'
    }else{
        error.name = '';
    }
    
    //* Description
    if(data.description.length < 10 || data.description.length > 300){
        error.description = '*'
    }else error.description = '';

    //* platforms
    if(!data.platforms[0]) {
        error.platforms='*'
    }else error.platforms='';

    //* Imagen
    if(!data.background_image) {
        error.background_image = '*';
    }else if(!/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/.test(data.background_image)){
        error.background_image='*'
    }else error.background_image = ''

    //* Released
    if(!data.released) error.released = '*'
    else error.released = ''

    //* Rating
    if(data.rating === 0 || data.rating > 5 || isNaN(data.rating)) error.rating = '*'
    else if(typeof data.rating !== 'number') error.rating = '*'
    else error.rating = '';

    //* Genres
    if(!data.genres.length) error.genres = '*'
    else error.genres = ''

    return error;
}
export default validation;