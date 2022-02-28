import moment from 'moment'
const ListItem = ({project}) =>{

const { category,date_added,description,name,uploader } = project
  return (
    <article className="ListItem">
      <h3>{name}</h3>
      <p>
        <span>Added</span>
        <strong>{moment(date_added).fromNow()}</strong>
      </p>
      <p>
        <span>Uploader:</span>
        <strong>{uploader}</strong>
      </p>
      <p>
        <span>Contact:</span>
        <strong>{`${uploader.split(' ')[0][0].toLowerCase()}${uploader.split(' ')[1].split("'").join('').toLowerCase()}@intuit.com`}</strong>
      </p>
      <p className="description">{description}</p>

    </article>
  )
}
export default ListItem
