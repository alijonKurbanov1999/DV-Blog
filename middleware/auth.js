export default function (context) {
  console.log("[Middleware] Just Auth");
  if(!context.store.getters.isAuthenticate) {
    context.redirect('/admin/auth')
  }
}
