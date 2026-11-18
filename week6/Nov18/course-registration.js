new Vue({
  el: '#app',
  data: {
    courseTitle: '',
    courseCode: '',
    courseTitleError: '',
    courseCodeError: '',
    submitted: false
  },
  methods: {
    validateCourseTitle() {
      this.courseTitleError = this.courseTitle.length < 3 ? 'Enter at least 3 characters' : '';
    },
    validateCourseCode() {
      this.courseCodeError = /^[A-Za-z]{2,5}\d{3,4}$/.test(this.courseCode) ? '' : 'Example: CS101';
    },
    submitForm() {
      this.validateCourseTitle();
      this.validateCourseCode();
      this.submitted = !this.courseTitleError && !this.courseCodeError;
    }
    
  }
});
