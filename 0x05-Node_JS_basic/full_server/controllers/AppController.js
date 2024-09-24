/**
 * Contains the miscellaneous route handlers.
 * @author Josiah Praise <https://github.com/josiah-praise>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
