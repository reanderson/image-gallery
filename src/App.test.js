import * as reducer from './utils/reducerComponents.js'

//pageReducer tests
test('PAGE_NEXT functionality', () => {
  //starting from page 2, end at 3, with 10 pages available
  expect(reducer.pageReducer(2, {type:"PAGE_NEXT", lastPage: 10})).toEqual(3);
  //starting from page 10, with 10 pages available, end at 10
  expect(reducer.pageReducer(10, {type:"PAGE_NEXT", lastPage: 10})).toEqual(10);
  //starting from page 11, with 10 pages available, end at 10
  expect(reducer.pageReducer(11, {type:"PAGE_NEXT", lastPage: 10})).toEqual(10);
  //starting with page undefined, should assume page is 1, ending at 2
  expect(reducer.pageReducer(undefined, {type:"PAGE_NEXT", lastPage: 10})).toEqual(2)
})

test('PAGE_PREVIOUS functionality', () => {
  //starting from page 4, end at 3
  expect(reducer.pageReducer(4, {type:"PAGE_PREVIOUS"})).toEqual(3)
  //starting from page 1, end at 1
  expect(reducer.pageReducer(1, {type:"PAGE_PREVIOUS"})).toEqual(1)
  //starting from page 0, end at 1
  expect(reducer.pageReducer(0, {type:"PAGE_PREVIOUS"})).toEqual(1)
  //starting with page undefined, should assume page is 1, and thus end at 1
  expect(reducer.pageReducer(undefined, {type:"PAGE_PREVIOUS"})).toEqual(1)
})

test('PAGE_FIRST functionality', () => {
  //starting from page 4, end at 1
  expect(reducer.pageReducer(4, {type:"PAGE_FIRST"})).toEqual(1)
  //starting from page 1, end at 1
  expect(reducer.pageReducer(1, {type:"PAGE_FIRST"})).toEqual(1)
  //starting from page 0, end at 1
  expect(reducer.pageReducer(0, {type:"PAGE_FIRST"})).toEqual(1)
  //starting with page undefined, end at 1
  expect(reducer.pageReducer(undefined, {type:"PAGE_FIRST"})).toEqual(1)
})

test('PAGE_LAST functionality', () => {
  //starting from page 3, with 10 pages, end at 10
  expect(reducer.pageReducer(3, {type:"PAGE_LAST", lastPage: 10})).toEqual(10);
  //starting from page 10, with 10 pages, end at 10
  expect(reducer.pageReducer(10, {type:"PAGE_LAST", lastPage: 10})).toEqual(10);
  //starting from page 11, with 10 pages, end at 10
  expect(reducer.pageReducer(11, {type:"PAGE_LAST", lastPage: 10})).toEqual(10);
  //starting with page undefined, with 10 pagees, end at 10
  expect(reducer.pageReducer(undefined, {type:"PAGE_LAST", lastPage: 10})).toEqual(10);
})

//favReducer tests
test('FAVORITE_ADD functionality', () => {
  //new favorite to an empty array
  expect(reducer.favReducer([], {type:"FAVORITE_ADD", id:2})).toEqual([2])
  //new favorite to an array with items already in it
  expect(reducer.favReducer([3, 4], {type:"FAVORITE_ADD", id:2})).toEqual([3, 4, 2])
  //attempt to add a favorite that's already there
  expect(reducer.favReducer([2, 3], {type:"FAVORITE_ADD", id:2})).toEqual([2, 3])
  //new favorite to undefined array
  expect(reducer.favReducer(undefined, {type:"FAVORITE_ADD", id:2})).toEqual([2])
})

test('FAVORITE_REMOVE functionality', () => {
  //remove only favorite
  expect(reducer.favReducer([2], {type:"FAVORITE_REMOVE", id:2})).toEqual([])
  //remove favorite from beginning
  expect(reducer.favReducer([2, 4], {type:"FAVORITE_REMOVE", id:2})).toEqual([4])
  //remove favorite from end
  expect(reducer.favReducer([4, 2], {type:"FAVORITE_REMOVE", id:2})).toEqual([4])
  //remove favorite from middle
  expect(reducer.favReducer([4, 2, 6], {type:"FAVORITE_REMOVE", id:2})).toEqual([4, 6])
  //attempt to remove a favorite that isn't there
  expect(reducer.favReducer([4, 6], {type:"FAVORITE_REMOVE", id:2})).toEqual([4, 6])
  //attempt to remove favorite from undefined array
  expect(reducer.favReducer(undefined, {type:"FAVORITE_REMOVE", id:2})).toEqual([])
})

//viewImgToggle tests
test('IMG_VIEW functionality', () => {
  //state set to true
  expect(reducer.viewImgToggle(true, {type:"IMG_VIEW"})).toEqual(true)
  //state set to false
  expect(reducer.viewImgToggle(false, {type:"IMG_VIEW"})).toEqual(true)
  //state undefined
  expect(reducer.viewImgToggle(undefined, {type:"IMG_VIEW"})).toEqual(true)
})

test('THUMB_VIEW functionality', () => {
  //state set to true
  expect(reducer.viewImgToggle(true, {type:"THUMB_VIEW"})).toEqual(false)
  //state set to false
  expect(reducer.viewImgToggle(false, {type:"THUMB_VIEW"})).toEqual(false)
  //state undefined
  expect(reducer.viewImgToggle(undefined, {type:"THUMB_VIEW"})).toEqual(false)
})

//setViewImage tests
test('SET_IMAGE functionatliy', () => {
  //setting an image when one hadn't been set previously
  expect(reducer.setViewImage(undefined, {type:"SET_IMAGE", info:{something: "exists"}})).toEqual({something: "exists"})
  //overwriting a set image
  expect(reducer.setViewImage({old: "info"}, {type:"SET_IMAGE", info:{something: "exists"}})).toEqual({something: "exists"})
})

//viewFavToggle tests
test('FAV_VIEW functionality', () => {
  //toggle false to true
  expect(reducer.viewFavToggle(false, {type:"FAV_VIEW"})).toEqual(true)
  //toggle true to false
  expect(reducer.viewFavToggle(true, {type:"FAV_VIEW"})).toEqual(false)
  //state undefined, assumes false, so returns true
  expect(reducer.viewFavToggle(undefined, {type:"FAV_VIEW"})).toEqual(true)
})

//imageSet tests
test('IMAGES_LOADED functionality', () => {
  //array undefined
  expect(reducer.imageSet(undefined, {type:"IMAGES_LOADED", images: ["some", "sample", "items"]})).toEqual(["some", "sample", "items"])
  //replace empty array
  expect(reducer.imageSet([], {type:"IMAGES_LOADED", images: ["some", "sample", "items"]})).toEqual(["some", "sample", "items"])
  //replace preexisting array
  expect(reducer.imageSet(["existing", "things"], {type:"IMAGES_LOADED", images: ["some", "sample", "items"]})).toEqual(["some", "sample", "items"])
})


test('reducer component functions with invalid action types', () => {
  //pageReducer: state already set
  expect(reducer.pageReducer(3, {type: "OTHER"})).toEqual(3)
  //pageReducer: state undefined
  expect(reducer.pageReducer(undefined, {type:"OTHER"})).toEqual(1)
  //favReducer: state already set
  expect(reducer.favReducer([2], {type:"OTHER"})).toEqual([2])
  //favReducer: state undefiined
  expect(reducer.favReducer(undefined, {type:"OTHER"})).toEqual([])
  //viewImgToggle: state already set
  expect(reducer.viewImgToggle(true, {type:"OTHER"})).toEqual(true)
  //viewImgToggle: state undefined
  expect(reducer.viewImgToggle(undefined, {type:"OTHER"})).toEqual(false)
  //setViewImage: state already set
  expect(reducer.setViewImage({something:"exists"}, {type:"OTHER"})).toEqual({something:"exists"})
  //setViewImage: state undefined
  expect(reducer.setViewImage(undefined, {type:"OTHER"})).toEqual(undefined)
  //viewFavToggle: state already set
  expect(reducer.viewFavToggle(true, {type:"OTHER"})).toEqual(true)
  //viewFavToggle: state undefined
  expect(reducer.viewFavToggle(undefined, {type:"OTHER"})).toEqual(false)
  //imageSet: state already set
  expect(reducer.imageSet(["some", "sample", "items"], {type:"OTHER"})).toEqual(["some", "sample", "items"])
  //imageSet: state undefined
  expect(reducer.imageSet(undefined, {type:"OTHER"})).toEqual([])
})