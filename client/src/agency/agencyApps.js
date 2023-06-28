import {makeAutoObservable} from 'mobx'

export default class agencyApps  {
    constructor() {
        this._page = 1
        this._totalCount = 0
        this._limit = 2
        this._apps = [] 
        makeAutoObservable(this)
    }

    /*
    setSelectedType(types) {
        this._selectedType = types
    }

    setTypes(types) {
        this._types = types
    }

      get types() {
        return this._types
    }

    get SelectedType() {
        return this._selectedType
    }
    */

    setApps(apps) {
        this._apps = apps
    }

    get apps() {
        return this._apps
    }

    setAppsSale(appsSale) {
        this._appsSale = appsSale
    }

    get appsSale() {
        return this._appsSale
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }
}