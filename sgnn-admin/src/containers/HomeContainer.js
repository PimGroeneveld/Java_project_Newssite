import React from 'react';

const HomeContainer = props => {
  return(
    <div className="home-container">
      <h2>SGNN NEWS web application </h2>
      <h3>Admin app</h3>
      <p>To add, edit and delete articles , click on Articles.</p>
      <p>To add, edit and delete journalists , click on Journalists.</p>
      <br/>
      <h3>User app</h3>
      <p>You can view list of articles ordered by date.</p>
      <p>You can filter articles based on category.</p>
      <p>You can filter articles based on region.</p>
      <p>You can click through to view full story.</p>
      <p>You can search for articles where the title includes a particular search term</p>
    </div>
  )
}

export default HomeContainer;
