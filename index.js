function openiframe(index) {
  const c = document.querySelector('.classdemo');
  console.log(c);
  switch (index) {
    case 1:
      c.innerHTML = '<iframe src="/W01/W01.html" frameborder="1"></iframe>';
      break;
    case 2:
      c.innerHTML = '<iframe src="/W03/card1.html" frameborder="1"></iframe>';
      break;
    case 3:
      c.innerHTML = '<iframe src="/W04/blog.html" frameborder="1"></iframe>';
      break;
    case 4:
      c.innerHTML = '<iframe src="/W04/card.html" frameborder="1"></iframe>';
      break;
  }
  console.log(index);
}
