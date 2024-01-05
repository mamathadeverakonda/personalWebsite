import React, { useState } from 'react';

const Project = ({ onAddProject }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both title and description are provided
    if (title.trim() === '' || description.trim() === '') {
      alert('Please enter both title and description');
      return;
    }

    // Create a new project object
    const newProject = {
      title,
      description,
    };

    // Call the parent component's function to add the project
    onAddProject(newProject);

    // Clear the form fields
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>

      <button type="submit">Add Project</button>
    </form>
  );
};

export default Project;


