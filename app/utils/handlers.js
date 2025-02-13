export const modelHandler = {
  request(context, next) {
    const { request } = context;
    const updatedRequest = Object.assign({}, request, {
      url: 'http://localhost:8000/api/0.1/contacts',
    });

    return next(updatedRequest);
  },
};
