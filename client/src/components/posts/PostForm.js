import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [formData, setFormData] = useState({
    wordphrase: '',
    wordphrasetranslation: '',
    wordphraseexplanation: '',
    wordphrasecategory: ''
  });

  const {
    wordphrase,
    wordphrasetranslation,
    wordphraseexplanation,
    wordphrasecategory
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Create Post...</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          addPost(formData);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Enter word or phrase"
            name="wordphrase"
            value={wordphrase}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* word phrase translation"
            name="wordphrasetranslation"
            value={wordphrasetranslation}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="word phrase explanation"
            name="wordphraseexplanation"
            value={wordphraseexplanation}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="word phrase category"
            name="wordphrasecategory"
            value={wordphrasecategory}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};
PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
