import { httpService } from './http.service.js';
import { storageService } from './async-storage-service'

const FILTER = 'filterby'
const ENDPOINT = 'product'

export const productService = {
  query,
  saveFilterBy,
  getFilterBy,
  getProductById,
  save,
}

async function query(filterBy = {}) {
  return await httpService.get(ENDPOINT, filterBy)
}

async function save(product) {
  var product = JSON.parse(JSON.stringify(product))
  if (product._id) {
    return await httpService.put(`${ENDPOINT}/${product._id}`, product);
  } else {
    return await httpService.post(ENDPOINT, product);
  }
}

async function getProductById(productId) {
  var product = await httpService.get(`${ENDPOINT}/${productId}`)
  return product
}

async function saveFilterBy(filterBy) {
  storageService._save(FILTER, filterBy)
}

async function getFilterBy() {
  return await storageService.query(FILTER)
}