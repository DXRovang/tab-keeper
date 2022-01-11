// import { Link } from "react-router-dom";

const SiteList = ({ sites, title, handleDelete }) => {
  // interesting that instead of passing in props
  // here and then calling props.sites, we just passed
  // in the dynamic value {sites, title} - VERY COOL

  return (
    <div>
      <h2>{title}</h2>
      {sites.map((site) => (
        <div className="preview">
          <a href={site.body} key={site.id} target="_blank">
            {site.body}
          </a>
          <button onClick={()=> handleDelete(site.id)}>delete Site</button>

        </div>
      ))}
    </div>
  );
};
export default SiteList;

{
  /* <Link to={`${site.body}`}>{site.body}</Link> */
}
{
  /* {site.body} */
}
