/*
  Ultimately, the state should be something akin to the following:
  {
    page: integer,
    favorites: [ids],

    viewFavorites: boolean,
    loaded: boolean
  }
*/

const reducer = (state = {}, action) => {
  return {
    page: pageReducer(
      state.page,
      action
    ),
    favorites: favReducer(
      state.favorites,
      action
    ),

    viewFavorites: viewFavToggle(
      state.viewFavorites,
      action
    ),
    loaded: loadSet(
      state.loaded,
      action
    )
  }
}

const pageReducer = (state = 1, action) => {
  switch (action.type) {
    //PAGE CHANGE ACTIONS
    case "PAGE_NEXT":
      // PAGE_NEXT: Change to the next page of images, ie 1->2, 2-> 3, etc.
      // Action should include a "lastPage" value, to ensure state does not go beyond the last available page.
      if (state < action.lastPage) {
        state = state + 1;
      } else {
        // On the off chance state is somehow greater than the lastPage value, set state to lastPage
        state = action.lastPage
      };
      return state;

    case "PAGE_PREVIOUS":
      // PAGE_PREVIOUS: Change to the previous page of images, ie 2->1, 3->2, etc.
      // 1 is the lowest page value
      if (state > 1) {
        state = state - 1;
      } else {
        // Set state to 1 just in case it somehow got below 1; if it already is 1, there's no harm in setting it to 1 again anyway
        state = 1
      }
      return state;

    case "PAGE_FIRST":
      //PAGE_FIRST: Change to the first page of images. Always should return state = 1
      state = 1;
      return state;

    case "PAGE_LAST":
      //PAGE_LAST: Change to the last page of images
      //Action should include a "lastPage" value, which state will be set to.
      state = action.lastPage;
      return state;

    default:
      //if the action isn't valid, just return the state
      return state;
  }
}

const favReducer = (state = [], action) => {
  switch (action.type) {
    //FAVORITE ADD/REMOVE ACTIONS
    case "FAVORITE_ADD":
      //FAVORITE_ADD: Adds a new favorite to the state.favorites array
      //action will include an "id" value, which is the id of the image being added to favorites
      const favorites = [...state]
      favorites.push(action.id);
      return favorites;

    //FAVORITE REMOVE


    default:
      //if the action isn't valid, just return the state
      return state;
  }
}

const viewFavToggle = (state = false, action) => {
  switch (action.type) {
    case "FAV_VIEW":
      // FAV_VIEW: Toggles whether the favorites view is active or not
      // if state is true, returns false, and if false, returns true
      return !state;

    default:
      //if the action isn't valid, just return the state
      return state;
  }
}

const loadSet = (state = false, action) => {
  switch (action.type) {
    case "IMAGES_LOADED":
      //IMAGES_LOADED: Sets the loaded state to true, telling the app that the API call to get the images is complete
      //This is almost certainly not the most efficient way to handle this asynchronous action, but can serve as a functional placeholder until further development is done.
      state = true;
      return state;

    default:
      //if the action isn't valid, just return the state
      return state;

  }
}


export default reducer;