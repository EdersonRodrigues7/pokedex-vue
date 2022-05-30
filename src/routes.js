const routes = [
  { path: '/', component: 'home-page' },
  { path: '/:number', component: 'about-page' }
];

const myRouter = new VueRouter({ routes });

myRouter.beforeEach((to, from, next) => {
  if (to.path !== '/') {
    let pkmNumber = to.path.slice(1);
    !pkmNumber.match(/\D/g) ? next() : next('/');
  } else {
    next();
  }
});
