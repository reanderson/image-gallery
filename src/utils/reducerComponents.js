export function pageReducer(state = 1, action) {
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

export function favReducer(state = [], action) {
  switch (action.type) {
    //FAVORITE ADD/REMOVE ACTIONS
    case "FAVORITE_ADD":
      //FAVORITE_ADD: Adds a new favorite to the state.favorites array
      //action will include an "id" value, which is the id of the image being added to favorites
      const favorites = [...state]
      if (!favorites.includes(action.id)) {
        favorites.push(action.id);
      }
      return favorites;

    case "FAVORITE_REMOVE":
      //FAVORITE_REMOVE: Removes a favorite from the favorites array
      //includes an "id" value, which is the id to find in the array to remove.
      const favs = [...state]
      if (favs.includes(action.id)) {
        const index = favs.findIndex((id) => id === action.id)
        favs.splice(index, 1)
      }
      return favs;


    default:
      //if the action isn't valid, just return the state
      return state;
  }
}

export function viewImgToggle(state = false, action) {
  switch (action.type) {
    case "IMG_VIEW":
      // IMG_VIEW: sets viewImage to true, indicating that a full image is being shown
      return true;

    case "THUMB_VIEW":
      // THUMB_VIEW: sets viewImage to false, indicating that thumbnails should be shown
      return false;

    default:
      //if the action isn't valid, just return the state
      return state;
  }
}

export function setViewImage(state, action) {
  switch (action.type) {
    case "SET_IMAGE":
      // SET_IMAGE: Changes imageToView's value to the information of the full image to be viewed.
      // Takes an aditional "info" value
      return action.info

    default:
      //if the action isn't valid, just return the state
      return state;
  }
}

export function viewFavToggle(state = false, action) {
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

export function imageSet(state = [], action) {
  switch (action.type) {
    case "IMAGES_LOADED":
      // IMAGES_LOADED: Sets the images state to the array of objects gotten from the API
      // Takes "images" value in the action
      // This is almost certainly not the most efficient way to handle this asynchronous action, but can serve as a functional placeholder until further development is done.
      return action.images;

    default:
      //if the action isn't valid, just return the state
      return state;

  }
}
