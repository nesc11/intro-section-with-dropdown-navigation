const hamburger = document.querySelector('.hamburger')
const navigation = document.querySelector('.navigation')
const dropdownTriggerFeatures = document.querySelector('.dropdown-trigger-features')
const dropdownTriggerCompany = document.querySelector('.dropdown-trigger-company')

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('expanded')
	hamburger.classList.toggle('expanded')
})

dropdownTriggerFeatures.addEventListener('click', () => {
    document.querySelector('.dropdown-container-features').classList.toggle('expanded')
    dropdownTriggerFeatures.querySelector('.arrow-down').classList.toggle('expanded')
    dropdownTriggerFeatures.querySelector('.arrow-up').classList.toggle('expanded')
})
dropdownTriggerCompany.addEventListener('click', () => {
    document.querySelector('.dropdown-container-company').classList.toggle('expanded')
    dropdownTriggerCompany.querySelector('.arrow-down').classList.toggle('expanded')
    dropdownTriggerCompany.querySelector('.arrow-up').classList.toggle('expanded')
})