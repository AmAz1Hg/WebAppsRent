
import {makeAutoObservable} from 'mobx'

export default class agencyAppsSale  {
    constructor() {
        this._types = [
            {id: 1, numberRooms: '1-комнатные'},
            {id: 2, numberRooms: '2-комнатные'},
            {id: 3, numberRooms: '3-комнатные'},
        ]

        this._page = 1
        this._totalCount = 0
        this._limit = 2

        this._appsSale = []
        makeAutoObservable(this)
    }

    
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
