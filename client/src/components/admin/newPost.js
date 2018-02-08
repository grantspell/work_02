import React, { Component } from 'react';
import styled from 'styled-components';
// import ImageUploader from 'react-images-upload';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'xfqghduq'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/kspell93/upload'

// STYLES
const Wrapper = styled.div`
    height: 100vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: 'Rokkitt', serif;
`
const Uploader = styled.div`
    height: 0 auto;
    width: 80vw;

    .uploadedIMG {
        width: 250px;
    }
`
const Content = styled.div`

    .textInput {
        height: 20vh;
        width: 70vw;
    }
    `
const Composition = styled.div`
    height: 80vh;
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
`
// pictures: [],
// post: {
//     imgURL: '',
//     content: ""
// },

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadedFileCloudinaryUrl: '',
            post: {
                title: '',
                imgURL: '',
                content: ''
            },
            title: '',
            imgURL: '',
            content: ''
        };
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
        console.log(this.state)
    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.log(err);
            }
            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url,
                    imgURL: response.body.secure_url
                });
            }
        });
    }

    makePost = async () => {
        const title = this.state.title
        const URL = this.state.imgURL
        const content = this.state.content

        const Post = { ...this.state.post }
        const updatedPost = {
            title: `${this.title}`,
            imgURL: `${this.URL}`,
            content: `${this.content}`
        }
        const newPost = { updatedPost } << Post
        await this.setState({
            post: newPost
        });
        console.log(this.state)
    }

    uploadImage = async () => {
        const image = this.state.pictures[0]
        const res = await axios.post(`/api/images/${image}`)
    }

    handleChange = async (e) => {
        e.preventDefault();
        const content = e.target.value
        await this.setState({
            content: content
        });
        this.makePost();
    }

    updateTitle = async (e) => {
        e.preventDefault();
        const title = e.target.value
        await this.setState({
            title: title
        });
        this.makePost();
    }

    sendPost = async () => {
        console.log(this.state.post)
        const payload = {
            title: this.state.title,
            imgURL: this.state.imgURL,
            content: this.state.content
        }
        await axios.post('/api/posts', payload)
        console.log("Posted")
    }


    render() {
        return (
            <Wrapper>
                <Composition>
                <div>
                    <h1>Title</h1>
                    <input type="text" onChange={this.updateTitle} value={this.state.title} />
                </div>
                    <Dropzone
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop.bind(this)}>
                        <p>Drop an image or click to select an image to upload.</p>
                    </Dropzone>
                <Uploader>
                    <div className="FileUpload">

                    </div>
                    <div>
                        {this.state.uploadedFileCloudinaryUrl === '' ? null :
                            <div>
                                <p>{this.state.uploadedFile.name}</p>
                                <img className="uploadedIMG" src={this.state.uploadedFileCloudinaryUrl} />
                            </div>}
                    </div>
                </Uploader>
                <Content>
                    <h1>Post Content</h1>
                    <textarea className="textInput" onChange={this.handleChange} name="content" value={this.state.post.content} />
                </Content>

                <div>
                    <button onClick={this.sendPost}>Post</button>
                </div>
                </Composition>
            </Wrapper >
        );
    }
}

export default NewPost;