function makeRequest(url, timeout = 2000, callback = function() { return 1;}) {
  console.log(url);
  console.log(timeout);
  console.log(callback());
}
makeRequest("/foo");

makeRequest("/foo", 500);

makeRequest("/foo", 500, function() {
  return 2;
});
