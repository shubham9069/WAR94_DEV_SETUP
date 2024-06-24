import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { Dropdown, Modal } from 'react-bootstrap';
import axios from '../../../axios';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../AuthProvider';


const PostTab1 = ({ posts, single_user, setposts }) => {

  const { userToken, userData } = useContext(AuthContext)
  const [PinPost, setpinPost] = useState(false);
  const [editPost, setEditPost] = useState(false);
  const [editPostText, setEditPostText] = useState("");
  const [editPostdata, seteditPostdata] = useState({})
  const [image, setimage] = useState([])
  const [comment, setcomment] = useState({})
  const [Replycomment, setReplycomment] = useState({})

  const [SubcommentSlice, setSubcommentSlice] = useState([])
  const [commentSlice, setcommentSlice] = useState([])

  const fileupload = (e) => {
    var file_input = document.getElementById('editpost-upload')
    file_input.click();
  }


  async function checkedpost(id, name, value) {
    console.log(value)
    var formData = new FormData();
    formData.append(name, value)
    formData.append("post_id", id)
    try {
      const response = await toast.promise(axios({
        method: "post",
        url: `/update-post`,
        data: formData,
        headers: {
          'Authorization': `Bearer ${userToken} `,
          'Content-Type': 'multipart/form-data'
        },
      }),
        {
          pending: 'waiting',
          success: {
            render({ data }) {
              const newdata = data?.data
              var arr = posts?.map((element) => {

                return element?.post_id == id ? { ...element, [name]: value } : element
              })
              console.log(arr)
              setposts(arr)
              setpinPost(false)
              return newdata?.message
            }
          },
          error: {
            render({ data }) {
              return data?.response?.data?.message
            }
          },
        });
    } catch (err) {
      console.log(err)
    }
  }
  async function editpost(id, type, url) {
    var formData = new FormData();
    if (type == "post") {
      formData.append("post_id", id)
      if (editPostText) {
        formData.append("text", editPostText)
      }
      if (image.length) {
        for (var i = 0; i < image.length; i++) {
          formData.append("images[]", image[i])
        }
      }
    }
    if (type == 'Add-comment') {
      formData.append("post_id", id)
      formData.append("text", comment[id])
    }

    try {
      const response = await toast.promise(axios({
        method: "post",
        url: url,
        data: formData,
        headers: {
          'Authorization': `Bearer ${userToken} `,
          'Content-Type': 'multipart/form-data'
        },
      }),
        {
          pending: 'waiting',
          success: {
            render({ data }) {
              const newdata = data?.data
              if (type == "post") {
                var arr = posts?.map((element) => {

                  return element?.post_id == id ? { ...element, ...newdata?.post } : element
                })

                setposts(arr)
                seteditPostdata(newdata?.post)
                setimage([])
              }
              if (type == "Add-comment") {
                var arr = posts?.map((element) => {
                  return element?.post_id == id ? { ...element, comments: [...element?.comments, newdata?.comment], } : element
                })
                setposts(arr)
                var obj = { ...comment }
                delete obj[id]
                console.log(obj)
                setcomment(obj)
              }
              if (type == "Delete-comment") {
                var arr = posts?.map((element) => {
                return element?.post_id == id ? { ...element, comments: element?.comments?.filter(c => c?.id != id) } : element
                })
                setposts(arr)
              }
              return newdata?.message
            }
          },
          error: {
            render({ data }) {

              return data?.response?.data?.message
            }
          },
        });
    } catch (err) {
      console.log(err)

    }

  }

  async function Comment_Post(post_id, id, type, url) {
    var formData = new FormData()
    if (type == "Delete-comment") {
      formData.append("comment_id", id)
    }
    if (type == "reply-comment") {
      formData.append("comment_id", id)
      formData.append("post_id", post_id)
      formData.append("text", Replycomment[id])
    }

    try {
      const response = await toast.promise(axios({
        method: "post",
        url: url,
        data: formData,
        headers: {
          'Authorization': `Bearer ${userToken} `,
          'Content-Type': 'multipart/form-data'
        },
      }),
        {
          pending: 'waiting',
          success: {
            render({ data }) {
              const newdata = data?.data

              if (type == "Delete-comment") {
                var arr = posts?.map((element) => {

                  return element?.post_id == post_id ? { ...element, comments: element?.comments?.filter(c => c?.id != id) } : element
                })
                console.log(arr)
                setposts(arr)
              }
              if (type == "reply-comment") {

                var arr = posts?.map((element) => {
                  var commArr = []
                  if (element.post_id == post_id) {
                    // console.log(element )    post data of replyies comment 
                    // comment 
                    var commArr = element?.comments?.map((a) => {
                      return a?.id == id ? { ...a, replies: [...a?.replies, newdata?.comment] } : a
                    })
                  }
                  console.log(commArr)
                  return element.post_id == post_id ? { ...element, comments: commArr } : element

                })
                setposts(arr)
                let Replyobj = { ...Replycomment }
                delete Replyobj[id]
                setReplycomment(Replyobj)
              }
              return newdata?.message
            }
          },
          error: {
            render({ data }) {

              return data?.response?.data?.message
            }
          },
        });


    } catch (err) {
      console.log(err)

    }
  }

  useEffect(() => {
    var obj = {}
    posts?.forEach((a) => {
      obj[a?.post_id] = 1
    })
    setSubcommentSlice(obj)
    setcommentSlice(obj)


  }, [posts])

  const video = useMemo(() => {

    return image?.length ? Array.from(image)?.map((img) => {
      console.log(img)
      return img?.type == "video/mp4" ? <video key={img?.name} width="100%" height="100%" style={{ borderRadius: 12 }} controls><source src={URL.createObjectURL(img)} /></video> : <img src={URL.createObjectURL(img)} style={{ width: '100%', height: '100%', borderRadius: 12 }}></img>
    }) :
      editPostdata?.post_images?.map((img) => {
        return img?.type == "jpg" || img?.type == "webp" || img?.type == "png" || img?.type == "jpeg" ?
          <img src={img?.image} style={{ width: '100%', height: '100%', borderRadius: 12, objectFit: 'cover', aspectRatio: 1.5, maxWidth: 300, maxHeight: 300 }}></img>
          : <video width="100%" height="100%" style={{ borderRadius: 12, maxHeight: 300 }} controls><source src={img?.image} /></video>


      })
  }, [image])

  function getPics(url) { //just for this demo
    console.log(url)
    const fullPage = document.querySelector('#fullpage');
    fullPage.style.backgroundImage = 'url(' + url + ')';
    fullPage.style.display = 'block';


  }
  return (
    <>
      {posts?.map((item, i) => {

        return <div className='tab5-post padding15rem'>

          <div className='between-div' style={{ gridGap: 10 }}>
            <img src="images/users.png" style={{ borderRadius: 12, width: 60, height: 60 }}></img>

            <div style={{ flex: 1 }}>
              <p className='span-text-dark' style={{ marginBottom: 0 }}> {single_user?.name || item?.user?.name}</p>
              <span className='span-text-light' style={{ fontSize: 12 }}>{item?.time}</span>
            </div>

            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.3" d="M3.75404 13.7121L2.13053 14.2537C2.01946 14.2907 1.9003 14.296 1.78637 14.2691C1.67244 14.2422 1.56825 14.1841 1.48547 14.1013C1.4027 14.0186 1.34459 13.9143 1.31767 13.8004C1.29076 13.6865 1.29609 13.5673 1.33307 13.4562L1.87466 11.8327L4.69437 9.01306L6.57763 10.8931L3.75404 13.7121Z" fill={Number(item?.pin) ? "#00A3FF" : "#A1A5B7"} />
              <path d="M14.0904 5.25298L10.3311 1.49364C10.2694 1.43185 10.1962 1.38281 10.1156 1.34936C10.0349 1.31591 9.9485 1.29871 9.86122 1.29871C9.77393 1.29871 9.68749 1.31591 9.60687 1.34936C9.52625 1.38281 9.45302 1.43185 9.39137 1.49364L8.9212 1.96309C8.79652 2.08779 8.72649 2.25691 8.72649 2.43326C8.72649 2.6096 8.79652 2.77872 8.9212 2.90342L9.39137 3.37295L7.33862 5.42572C6.59734 5.06987 5.76398 4.95257 4.95327 5.08992C4.14256 5.22727 3.39435 5.61253 2.81164 6.19268C2.68712 6.31747 2.61719 6.48656 2.61719 6.66284C2.61719 6.83913 2.68712 7.00822 2.81164 7.13301L8.45104 12.7717C8.57574 12.8964 8.74486 12.9664 8.9212 12.9664C9.09754 12.9664 9.26666 12.8964 9.39137 12.7717C9.97163 12.1892 10.357 11.4412 10.4943 10.6305C10.6317 9.81987 10.5143 8.98658 10.1583 8.24544L12.2111 6.19268L12.6806 6.66284C12.8053 6.78752 12.9744 6.85754 13.1508 6.85754C13.3271 6.85754 13.4962 6.78752 13.6209 6.66284L14.0904 6.19268C14.1522 6.13103 14.2013 6.05776 14.2347 5.97714C14.2682 5.89651 14.2854 5.81012 14.2854 5.72283C14.2854 5.63554 14.2682 5.54915 14.2347 5.46852C14.2013 5.3879 14.1522 5.31463 14.0904 5.25298Z" fill={Number(item?.pin) ? "#00A3FF" : "#A1A5B7"} />
            </svg>




            {/* drop down section three dot  */}
            <Dropdown  >
              <Dropdown.Toggle style={{ border: 'none', background: 'transparent', width: '100%' }} id="dropdown-basic">
                <i class="bi bi-three-dots-vertical dropdown-toggle" onClick={(e) => { seteditPostdata(item); setEditPostText(item?.text); setimage("") }}></i>
              </Dropdown.Toggle>

              <Dropdown.Menu  >
                <ul class="post-dropdown">
                  <li>
                    <p>Post</p>
                    <input type="checkbox" checked={item?.status} name="status" className='event-toggle' style={{ position: 'relative', top: 0, left: 0 }} onChange={(e) => checkedpost(item?.post_id, "status", e.target.checked ? 1 : 0)}></input>

                  </li>
                  <li onClick={() => setpinPost(true)}>
                    <p>{Number(item?.pin) ? "Unpin Post" : "Pin Post "}</p>

                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.3" d="M3.75404 13.7121L2.13053 14.2537C2.01946 14.2907 1.9003 14.296 1.78637 14.2691C1.67244 14.2422 1.56825 14.1841 1.48547 14.1013C1.4027 14.0186 1.34459 13.9143 1.31767 13.8004C1.29076 13.6865 1.29609 13.5673 1.33307 13.4562L1.87466 11.8327L4.69437 9.01306L6.57763 10.8931L3.75404 13.7121Z" fill={Number(item?.pin) ? "#00A3FF" : "#A1A5B7"} />
                      <path d="M14.0904 5.25298L10.3311 1.49364C10.2694 1.43185 10.1962 1.38281 10.1156 1.34936C10.0349 1.31591 9.9485 1.29871 9.86122 1.29871C9.77393 1.29871 9.68749 1.31591 9.60687 1.34936C9.52625 1.38281 9.45302 1.43185 9.39137 1.49364L8.9212 1.96309C8.79652 2.08779 8.72649 2.25691 8.72649 2.43326C8.72649 2.6096 8.79652 2.77872 8.9212 2.90342L9.39137 3.37295L7.33862 5.42572C6.59734 5.06987 5.76398 4.95257 4.95327 5.08992C4.14256 5.22727 3.39435 5.61253 2.81164 6.19268C2.68712 6.31747 2.61719 6.48656 2.61719 6.66284C2.61719 6.83913 2.68712 7.00822 2.81164 7.13301L8.45104 12.7717C8.57574 12.8964 8.74486 12.9664 8.9212 12.9664C9.09754 12.9664 9.26666 12.8964 9.39137 12.7717C9.97163 12.1892 10.357 11.4412 10.4943 10.6305C10.6317 9.81987 10.5143 8.98658 10.1583 8.24544L12.2111 6.19268L12.6806 6.66284C12.8053 6.78752 12.9744 6.85754 13.1508 6.85754C13.3271 6.85754 13.4962 6.78752 13.6209 6.66284L14.0904 6.19268C14.1522 6.13103 14.2013 6.05776 14.2347 5.97714C14.2682 5.89651 14.2854 5.81012 14.2854 5.72283C14.2854 5.63554 14.2682 5.54915 14.2347 5.46852C14.2013 5.3879 14.1522 5.31463 14.0904 5.25298Z" fill={Number(item?.pin) ? "#00A3FF" : "#A1A5B7"} />
                    </svg>


                  </li>

                  <li >
                    <p>Hide Post</p>


                    <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.825 6.73346C16.658 7.78019 16.658 9.21989 15.825 10.2666C14.5017 11.9296 12.0598 14.1667 8.49929 14.1667C4.93883 14.1667 2.49692 11.9296 1.17355 10.2666C0.340586 9.21989 0.340586 7.78019 1.17355 6.73346C2.49692 5.07047 4.93883 2.83337 8.49929 2.83337C12.0598 2.83337 14.5017 5.07047 15.825 6.73346Z" fill="#E3E4E9" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91602 8.49996C9.91602 9.28236 9.28175 9.91663 8.49935 9.91663C7.71695 9.91663 7.08268 9.28236 7.08268 8.49996C7.08268 8.47985 7.0831 8.45984 7.08393 8.43994C7.19435 8.47881 7.31313 8.49996 7.43685 8.49996C8.02365 8.49996 8.49935 8.02426 8.49935 7.43746C8.49935 7.31374 8.4782 7.19496 8.43933 7.08454C8.45923 7.08371 8.47924 7.08329 8.49935 7.08329C9.28175 7.08329 9.91602 7.71756 9.91602 8.49996ZM11.3327 8.49996C11.3327 10.0648 10.0642 11.3333 8.49935 11.3333C6.93454 11.3333 5.66602 10.0648 5.66602 8.49996C5.66602 6.93515 6.93454 5.66663 8.49935 5.66663C10.0642 5.66663 11.3327 6.93515 11.3327 8.49996Z" fill="#A1A5B7" />
                    </svg>

                  </li>
                  <li onClick={() => { setEditPost(true) }}>
                    <p>Edit Post</p>


                    <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.825 6.73346C16.658 7.78019 16.658 9.21989 15.825 10.2666C14.5017 11.9296 12.0598 14.1667 8.49929 14.1667C4.93883 14.1667 2.49692 11.9296 1.17355 10.2666C0.340586 9.21989 0.340586 7.78019 1.17355 6.73346C2.49692 5.07047 4.93883 2.83337 8.49929 2.83337C12.0598 2.83337 14.5017 5.07047 15.825 6.73346Z" fill="#E3E4E9" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91602 8.49996C9.91602 9.28236 9.28175 9.91663 8.49935 9.91663C7.71695 9.91663 7.08268 9.28236 7.08268 8.49996C7.08268 8.47985 7.0831 8.45984 7.08393 8.43994C7.19435 8.47881 7.31313 8.49996 7.43685 8.49996C8.02365 8.49996 8.49935 8.02426 8.49935 7.43746C8.49935 7.31374 8.4782 7.19496 8.43933 7.08454C8.45923 7.08371 8.47924 7.08329 8.49935 7.08329C9.28175 7.08329 9.91602 7.71756 9.91602 8.49996ZM11.3327 8.49996C11.3327 10.0648 10.0642 11.3333 8.49935 11.3333C6.93454 11.3333 5.66602 10.0648 5.66602 8.49996C5.66602 6.93515 6.93454 5.66663 8.49935 5.66663C10.0642 5.66663 11.3327 6.93515 11.3327 8.49996Z" fill="#A1A5B7" />
                    </svg>

                  </li>

                </ul>
              </Dropdown.Menu>
            </Dropdown>

          </div>


          {/* images sectyion or post section  */}
          {item.post_images?.length ? <div style={{ display: 'grid', gridTemplateColumns: 'repeat( auto-fit, minmax(100px, 1fr) )', gridGap: 10, flex: 1 }}>
            {item?.post_images?.map((img) => {

              return <div className='d-flex justify-content-center'>
                {img?.type == "jpg" || img?.type == "webp" || img?.type == "png" || img?.type == "jpeg" ?
                  <img src={img?.image} style={{ width: '100%', height: '100%', borderRadius: 12, objectFit: 'cover', aspectRatio: 1.5, maxWidth: 300, maxHeight: 300 }} onClick={() => getPics(img?.image)}></img>
                  : <video width="100%" height="100%" key={img?.name || img?.image} style={{ borderRadius: 12, maxHeight: 300, }} controls><source src={img?.image} /></video>
                }
              </div>
            })}

          </div> :
            ""}



          {item?.text && (<p style={{ marginBottom: 0, flex: 1 }}>{item?.text}</p>)}

          {/* like section  */}
          <div style={{ display: 'flex', gridGap: 30, borderBottom: '2px solid #ECF0F3', paddingBottom: '1rem' }} >

            <span style={{ color: '#80808F', fontSize: 13 }}><i class="bi bi-suit-heart-fill" style={{ marginRight: 6, color: 'black' }}></i> {item?.fav_count}</span>
            <span style={{ color: '#80808F', fontSize: 13 }}>
              <svg width="16" height="16" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 6 }}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3732 10.9584C12.7011 11.2863 13.2617 11.0529 13.2601 10.5892L13.2491 7.51133V1.93331C13.2491 0.906428 12.4166 0.0739746 11.3898 0.0739746H2.71285C1.68597 0.0739746 0.853516 0.906428 0.853516 1.93331V4.4899H4.97721C6.69875 4.4899 8.09434 5.88549 8.09434 7.60703V9.37066H10.7854L12.3732 10.9584Z" fill="#D6D6E0" />
              </svg>
              {item?.comments?.length}</span>
            <span style={{ color: '#80808F', fontSize: 13 }}>

              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 6 }}>
                <path d="M2.44104 8.5838C2.53171 7.53908 3.33355 6.74995 4.37913 6.66974C5.26479 6.60181 6.51502 6.54248 8.18055 6.54248C9.84607 6.54248 11.0963 6.60181 11.982 6.66974C13.0275 6.74995 13.8294 7.53908 13.9201 8.58381C13.9782 9.25407 14.0252 10.1008 14.0252 11.0883C14.0252 12.0758 13.9782 12.9225 13.9201 13.5928C13.8294 14.6375 13.0275 15.4266 11.982 15.5068C11.0963 15.5748 9.84607 15.6341 8.18055 15.6341C6.51502 15.6341 5.26479 15.5748 4.37913 15.5068C3.33355 15.4266 2.53171 14.6375 2.44104 13.5928C2.38286 12.9225 2.33594 12.0758 2.33594 11.0883C2.33594 10.1008 2.38286 9.25407 2.44104 8.5838Z" fill="#F3F3F6" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.36641 4.72867C6.1128 4.98228 5.70162 4.98228 5.44802 4.72867C5.19441 4.47506 5.19441 4.06388 5.44802 3.81028L7.72092 1.53737C7.97453 1.28377 8.38571 1.28377 8.63931 1.53737L10.9122 3.81028C11.1658 4.06388 11.1658 4.47506 10.9122 4.72867C10.6586 4.98228 10.2474 4.98228 9.99383 4.72867L8.82952 3.56436V9.78938C8.82952 10.148 8.53877 10.4388 8.18012 10.4388C7.82146 10.4388 7.53072 10.148 7.53072 9.78938V3.56436L6.36641 4.72867Z" fill="#D6D6E0" />
              </svg>

              {item?.comment_count}</span>
          </div>


          {/* write comment section  */}
          <div className="t d-flex" style={{ gridGap: 20 }}>
            <input type='text' placeholder="reply..." value={comment[item?.post_id] || ""} name={item?.post_id} onChange={(e) => setcomment({ ...comment, [e.target.name]: e.target.value })} style={{ width: '100%', height: '100%', border: 'none', fontSize: '13px' }} />
            <i class="bi bi-send-fill" style={{ color: '#DADADA' }} onClick={() => editpost(item?.post_id, "Add-comment", "/add-comment")}></i>
            <i class="bi bi-paperclip" style={{ color: '#DADADA' }}></i>
          </div>
          <div>


            {/* //comment section  */}
            {item?.comments?.slice(0, commentSlice[item?.post_id])?.map((comment) => {

              return <div>
                <div className='tab-5-comment d-flex' style={{ gridGap: 20, margin: '1rem 0' }}>
                  <img src={comment?.user?.avatar} style={{ width: 45, height: 45, borderRadius: '50%' }}></img>

                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 13, marginBottom: 3 }}>
                      <span style={{ fontWeight: 600 }}>{comment.user?.name}</span>
                      <span style={{ marginLeft: 10, color: '#B5B5C3', fontSize: 11 }}>{new Date(comment?.created_at).toLocaleString()}</span>
                      <Dropdown >
                        <Dropdown.Toggle  style={{ border: 'none', background: 'transparent', width: '100%' }} id="dropdown-basic">
                          <span className="dropdown-toggle" style={{ float: 'right', color: '#B5B5C3', marginLeft: 10, cursor: 'pointer' }}>Reply</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu  >
                          <ul className=" post-dropdown" style={{ width: '250px' }}  >

                            {/* write comment section  */}
                            <div className="t d-flex" style={{ gridGap: 20, padding: 10 }}>

                              <input type='text' placeholder="reply..." value={Replycomment[comment?.id] || ""} name={comment?.id} onChange={(e) => setReplycomment({ ...Replycomment, [e.target.name]: e.target.value })} style={{ width: '100%', height: '100%', border: 'none', fontSize: '13px' }} />
                              <i class="bi bi-send-fill" style={{ color: '#DADADA' }} onClick={() => Comment_Post(item?.post_id, comment?.id, "reply-comment", "/add-reply")}></i>
                              <i class="bi bi-paperclip" style={{ color: '#DADADA' }}></i>


                            </div>
                          </ul>

                        </Dropdown.Menu>
                      </Dropdown>
                      
                      <i class="bi bi-trash3-fill" style={{ color: '#B5B5C3', float: 'right' }} onClick={() => Comment_Post(item?.post_id, comment?.id, "Delete-comment", "/delete-comment")} ></i>
                    </p>
                    <p style={{ fontSize: 12, marginBottom: 0, }}>
                      {comment?.text}
                    </p>
                  </div>


                </div>

                {/* sub comment section reply  */}
                {comment?.replies?.slice(0, SubcommentSlice[item?.post_id])?.map((rep) => {

                  return <div className='tab-5-comment d-flex' style={{ gridGap: 20, margin: '1rem 0 1rem auto', width: '85%' }}>
                    <img src={rep?.user?.avatar} style={{ width: 45, height: 45, borderRadius: '50%' }}></img>

                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 13, marginBottom: 3 }}>
                        <span style={{ fontWeight: 600 }}>{rep?.user?.name}</span>
                        <span style={{ marginLeft: 10, color: '#B5B5C3', fontSize: 11 }}>{new Date(rep?.created_at).toLocaleString()}</span>

                        <i class="bi bi-trash3-fill" style={{ color: '#B5B5C3', float: 'right' }} onClick={() => Comment_Post(item?.post_id, rep?.id, "Delete-comment", "/delete-comment")} ></i>
                      </p>
                      <p style={{ fontSize: 12, marginBottom: 0, }}>
                        {rep?.text}
                      </p>
                    </div>


                  </div>
                })}

                {comment?.replies?.length > SubcommentSlice[item?.post_id] && (<span className='span-text-dark' style={{ fontSize: 11, margin: '0 0 1rem auto', width: '85%', display: 'block', cursor: 'pointer' }} onClick={() => setSubcommentSlice({ ...SubcommentSlice, [item?.post_id]: SubcommentSlice[item?.post_id] + 1 })}>view sub</span>)}
              </div>
            })}
            {item?.comments?.length > commentSlice[item?.post_id] && (<span className='span-text-dark' style={{ fontSize: 11, display: 'block', cursor: 'pointer' }} onClick={() => setcommentSlice({ ...commentSlice, [item?.post_id]: commentSlice[item?.post_id] + 1 })}>view comment </span>)}

          </div>


        </div>

      })}

      {/* //pin post modal  */}
      <Modal show={PinPost} onHide={() => setpinPost(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: 18, fontWeight: 600, color: '#3F4254', letterSpacing: 1 }}>Pin Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className='center-div tab1-right-div' style={{ background: '#FFF7E7', border: '1px dashed #FFA800' }}>
            <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M16.4412 30.4364C24.0081 30.4364 30.1422 24.3023 30.1422 16.7354C30.1422 9.16856 24.0081 3.03442 16.4412 3.03442C8.87437 3.03442 2.74023 9.16856 2.74023 16.7354C2.74023 24.3023 8.87437 30.4364 16.4412 30.4364Z" fill="#F89C47" />
              <rect x="15.0703" y="9.88489" width="2.7402" height="10.9608" rx="1" fill="#F89C47" />
              <rect x="15.0703" y="22.2157" width="2.7402" height="2.7402" rx="1" fill="#F89C47" />
            </svg>
            <p style={{ flex: 1, marginBottom: 2, fontWeight: 600, fontSize: 13 }}>Warning
              <p style={{ color: '#7E8299', fontSize: 11, fontWeight: 500, marginBottom: 0, marginTop: 3 }}>By Pin Post, user might notified the changes</p>
            </p>

          </div>

          <div className='d-flex justify-content-end' style={{ gridGap: 20, padding: '1rem 0' }}>
            <button className="themeButton" onClick={() => checkedpost(editPostdata?.post_id, "pin", Number(editPostdata?.pin) ? 0 : 1)}>Pin Post</button>
            <button className="themeButton" style={{ color: '#3E97FF', backgroundColor: '#EEF6FF', borderColor: 'transparent' }} onClick={() => setpinPost(false)}>Cancel</button>
          </div>
        </Modal.Body>
      </Modal>


      {/* edit post  */}
      <Modal show={editPost} onHide={() => setEditPost(false)} style={{ backdropFilter: 'blur(8px)' }}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: 18, fontWeight: 600, color: '#3F4254', letterSpacing: 1 }}>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className='tab5-post ' style={{ padding: '0 1rem' }}>

            <div className='between-div' style={{ gridGap: 10 }}>
              <img src="images/users.png" style={{ borderRadius: 12, width: 50, height: 50 }}></img>

              <div style={{ flex: 1 }}>
                <p className='span-text-dark' style={{ marginBottom: 0 }}>{single_user?.name || editPostdata?.user?.name}</p>
                <span className='span-text-light' style={{ fontSize: 12 }}>{editPostdata?.time}</span>
              </div>

              {image.length ? <i class="bi bi-trash3-fill" style={{ color: '#505062' }} onClick={() => setimage([])}></i> : ""}

            </div>

            <div style={{ position: 'relative' }} onClick={fileupload}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat( auto-fit, minmax(100px, 1fr) )', gridGap: 10 }}>

                {video}

              </div>
              <div className="editpost-upload center-div" >
                <input type="file" multiple hidden id="editpost-upload" onChange={(e) => setimage(e.target.files)}></input>
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3" d="M1.33398 7.39996C1.33398 7.03177 1.63246 6.73329 2.00065 6.73329C2.36884 6.73329 2.66732 7.03177 2.66732 7.39996L2.66732 12C2.66732 12.7363 3.26427 13.3333 4.00065 13.3333L13.0007 13.3333C13.737 13.3333 14.334 12.7363 14.334 12L14.334 3.99996C14.334 3.26358 13.737 2.66663 13.0007 2.66663L9.66732 2.66663C9.29913 2.66663 9.00065 2.36815 9.00065 1.99996C9.00065 1.63177 9.29913 1.33329 9.66732 1.33329L13.0007 1.33329C14.4734 1.33329 15.6673 2.5272 15.6673 3.99996L15.6673 12C15.6673 13.4727 14.4734 14.6666 13.0007 14.6666L4.00065 14.6666C2.52789 14.6666 1.33398 13.4727 1.33398 12L1.33398 7.39996Z" fill="#3699FF" />
                  <path d="M8.16506 4.06745C8.06186 4.11083 7.96517 4.17513 7.88128 4.26035L5.25628 6.92702C4.91457 7.27415 4.91457 7.83696 5.25628 8.1841C5.59799 8.53123 6.15201 8.53123 6.49372 8.1841L7.625 7.03486V11.1111C7.625 11.602 8.01675 12 8.5 12C8.98325 12 9.375 11.602 9.375 11.1111V7.03486L10.5063 8.1841C10.848 8.53123 11.402 8.53123 11.7437 8.1841C12.0854 7.83696 12.0854 7.27415 11.7437 6.92702L9.11872 4.26035C8.8609 3.99844 8.48223 3.93414 8.16506 4.06745Z" fill="#3699FF" />
                </svg>

              </div>
            </div>
            <textarea style={{ marginBottom: 0, border: 'none' }} value={editPostText} onChange={(e) => setEditPostText(e.target.value)}>  </textarea>

            <div style={{ display: 'flex', gridGap: 30 }} >

              <span style={{ color: '#80808F', fontSize: 13 }}><i class="bi bi-suit-heart-fill" style={{ marginRight: 6 }}></i> {editPostdata?.fav_count}</span>

              <span style={{ color: '#80808F', fontSize: 13 }}>
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 6 }}>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3732 10.9584C12.7011 11.2863 13.2617 11.0529 13.2601 10.5892L13.2491 7.51133V1.93331C13.2491 0.906428 12.4166 0.0739746 11.3898 0.0739746H2.71285C1.68597 0.0739746 0.853516 0.906428 0.853516 1.93331V4.4899H4.97721C6.69875 4.4899 8.09434 5.88549 8.09434 7.60703V9.37066H10.7854L12.3732 10.9584Z" fill="#D6D6E0" />
                </svg>
                {editPostdata?.comments?.length}</span>
              <span style={{ color: '#80808F', fontSize: 13 }}>

                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 6 }}>
                  <path d="M2.44104 8.5838C2.53171 7.53908 3.33355 6.74995 4.37913 6.66974C5.26479 6.60181 6.51502 6.54248 8.18055 6.54248C9.84607 6.54248 11.0963 6.60181 11.982 6.66974C13.0275 6.74995 13.8294 7.53908 13.9201 8.58381C13.9782 9.25407 14.0252 10.1008 14.0252 11.0883C14.0252 12.0758 13.9782 12.9225 13.9201 13.5928C13.8294 14.6375 13.0275 15.4266 11.982 15.5068C11.0963 15.5748 9.84607 15.6341 8.18055 15.6341C6.51502 15.6341 5.26479 15.5748 4.37913 15.5068C3.33355 15.4266 2.53171 14.6375 2.44104 13.5928C2.38286 12.9225 2.33594 12.0758 2.33594 11.0883C2.33594 10.1008 2.38286 9.25407 2.44104 8.5838Z" fill="#F3F3F6" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.36641 4.72867C6.1128 4.98228 5.70162 4.98228 5.44802 4.72867C5.19441 4.47506 5.19441 4.06388 5.44802 3.81028L7.72092 1.53737C7.97453 1.28377 8.38571 1.28377 8.63931 1.53737L10.9122 3.81028C11.1658 4.06388 11.1658 4.47506 10.9122 4.72867C10.6586 4.98228 10.2474 4.98228 9.99383 4.72867L8.82952 3.56436V9.78938C8.82952 10.148 8.53877 10.4388 8.18012 10.4388C7.82146 10.4388 7.53072 10.148 7.53072 9.78938V3.56436L6.36641 4.72867Z" fill="#D6D6E0" />
                </svg>

                65</span>
            </div>
          </div>
          <button className="themeButton" style={{ margin: '1rem 0 0.5rem auto' }} onClick={() => editpost(editPostdata?.post_id, "post", "/update-post")}>Save Changes</button>

        </Modal.Body>

      </Modal>


    </>
  )
}

export default PostTab1