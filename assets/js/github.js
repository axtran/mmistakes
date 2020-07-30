const org = 'axtran';
const repo = 'private-gridster';
const branch = 'gh-pages-private';
const page = 'index.html'
function onSubmit(form) {
  
  //#endregion
  //#const login = form.username || form.querySelector('#login').value;
  //#const password = form.token || form.querySelector('#password').value;
  const login = 'qatran';
  const password = '=2x6kpr7;';
  
  const token = btoa(`${login}:${password}`);
  //const token = 'a11967ec6e83409ff92fdddc3bc0122db133cbfa';
  const request = new Request(
    `https://api.github.com/repos/${org}/${repo}/contents/${page}?ref=${branch}`,
    {
      method: 'GET',
      credentials: 'omit',
      headers: {
        Accept: 'application/json',
        Authorization: `Basic ${token}`
      },
    });

  
  fetch(${request})
    .then(function (response) {
      if (response.status !== 200) { // 4 200
        document.querySelector('#loginForm').innerHTML = `Failed to load document (status: ${response.status})`;
      } else {
        response.json()
          .then(function (json) { 
            const content = json.encoding === 'base64' ? atob(json.content) : json.content;

            
            const startIdx = content.indexOf('<body');
            document.body.innerHTML = content.substring(
                content.indexOf('>', startIdx) + 1,
                content.indexOf('</body>'));
          });
      }
    });

    return false;
}