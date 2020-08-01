export default (req, res) => {
  const {
    query: { id },
  } = req;

  // TODO: Query the database here
  return res.status(200).json({
    email: 'test@example.com',
    id,
    name: 'Test',
  });
};