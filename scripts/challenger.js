let storage = window.localStorage;

// storing daily data into local storage
storage.data = JSON.stringify({'morning_chapters': 2, 'other_chapters': 1, 'riser_time': '6:00am', 'notes': "Yes", 'Prayed': 'Yes', 'smr': 'Yes' })

const form = document.querySelector('form');

