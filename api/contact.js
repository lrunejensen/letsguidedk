module.exports = async function (context, req) {
  const { name, email, message } = req.body;

  // For now, just log it (you can integrate with email, storage, etc.)
  context.log("New contact form submission:", { name, email, message });

  return {
    status: 200,
    body: { success: true, message: "Form submitted" },
  };
};