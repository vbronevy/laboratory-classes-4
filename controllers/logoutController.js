const getLogoutView = (req, res) => {
	res.render("logout");
  };
  
  const getProcessLog = () => {
	console.log("App is closing");
  };
  
  const killApplication = (req, res) => {
	getProcessLog();
	process.exit();
  };
  
  module.exports = { getLogoutView, killApplication };
  