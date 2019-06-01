const { forwardTo } = require("prisma-binding");
const { hasPermission } = require("../utils");

const Query = {
  forms: forwardTo("db"),
  form: forwardTo("db"),
  formsConnection: forwardTo("db"),
  questions: forwardTo("db"),
  me(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    );
  },
  async users(parent, args, ctx, info) {
    // 1. check if logged in
    if (!ctx.request.userId) {
      throw new Error("You must be logged in");
    }
    // 2. check if user has permissions
    hasPermission(ctx.request.user, ["ADMIN", "PERMISSIONUPDATE"]);
    // 3. if so, query all users
    return ctx.db.query.users({}, info);
  }
};

module.exports = Query;
