# ml-multipart

Test of multipart and MarkLogic.

1. Copy `config_sample.js` to `config.js` and edit for your environment
(/PATH/TO, HOSTNAME, USERNAME, PASSWORD).

2. Create a multipart request:

  `node create.js`

You can also use the `simple-body` file.

3. Post the multipart request:

  `node post.js`

4. Get a multipart response:

  `node get.js`
