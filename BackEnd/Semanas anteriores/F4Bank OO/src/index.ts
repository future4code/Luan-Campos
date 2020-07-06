import {UserAccount} from "./classes"
import {Bank} from "./classes"
import {JSONFileManager} from "./JSONFileManager"

const json = new JSONFileManager("accounts.json")
const accounts = json,getObjectFromFile() 
const bank = new Bank(accounts, json)


console.log(json.getObjectFromFile())