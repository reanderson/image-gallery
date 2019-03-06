/*
  Ultimately, the state should be something akin to the following:
  {
    page: integer,
    favorites: [ids],
    viewImage: boolean
    imageToView: {image info}
    viewFavorites: boolean,
    images: [objects]
  }
*/

import * as components from './reducerComponents.js'

const reducer = (state = {}, action) => {
  return {
    page: components.pageReducer(
      state.page,
      action
    ),
    favorites: components.favReducer(
      state.favorites,
      action
    ),
    viewImage: components.viewImgToggle(
      state.viewImage,
      action
    ),
    imageToView: components.setViewImage(
      state.imageToView,
      action
    ),
    viewFavorites: components.viewFavToggle(
      state.viewFavorites,
      action
    ),
    images: components.imageSet(
      state.images,
      action
    )
  }
}


export default reducer;