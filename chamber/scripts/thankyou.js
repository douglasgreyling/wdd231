const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const businessName = document.getElementById('business_name');
const submittedAt = document.getElementById('submitted_at');

const urlParams = new URLSearchParams(window.location.search);

firstName.textContent = urlParams.get('first_name');
lastName.textContent = urlParams.get('last_name');
email.textContent = urlParams.get('email');
mobile.textContent = urlParams.get('mobile');
businessName.textContent = urlParams.get('org_title');
submittedAt.textContent = urlParams.get('timestamp');
