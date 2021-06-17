import * as React from "react";
import Head from "next/head";
import LayoutAdmin from "../../components/LayoutAdmin";

import { useDropzone } from "react-dropzone";

import { $ } from "../../utils/generated/graphql-client-sdk";
import { useTypedMutation } from "../../utils/gql-zeus-query-hooks";

function DropzoneWithPreview(props) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      props.setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  };

  const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box",
  };

  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  };

  const img = {
    display: "block",
    width: "auto",
    height: "100%",
  };

  const dropzoneStyles = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: "2px",
    borderRadius: "2px",
    borderColor: " #eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };

  const thumbs = props.files.map((file) => (
    <div style={{ ...thumb }} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  React.useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      props.files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [props.files]
  );

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })} style={dropzoneStyles}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
}

function ImageUploader() {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none",
        }}
      />
      <div
        style={{
          height: "60px",
          width: "60px",
          border: "1px dashed black",
        }}
        onClick={() => imageUploader.current.click()}
      >
        <img
          ref={uploadedImage}
          style={{
            width: "60px",
            height: "60px",
            position: "absolute",
          }}
        />
      </div>
      Click to upload Image
    </div>
  );
}

const AdminOrders = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0.0);
  const [description, setDescription] = React.useState("");
  const [imageUrls, setImageUrls] = React.useState([]);
  const [categoryDisplayName, setCategoryDisplayName] =
    React.useState("Home Furnishing");

  const [files, setFiles] = React.useState([]);

  console.log("Admin orders, files:", files);

  async function uploadImage(file: File) {
    const fakeImageForm = new FormData();
    fakeImageForm.append("image", file, file.name);

    const req = await fetch("/api/actions/image-upload", {
      method: "POST",
      body: fakeImageForm,
    });
    const res = await req.json();

    console.log("Got image upload result:", res);
    const imageUrl = `http://localhost:9000/${res.file.original.Bucket}/${res.file.original.Key}`;
    console.log("View image at:", imageUrl);
    return imageUrl;
  }

  const [insertProduct, { loading, data, error }] = useTypedMutation({
    insert_product_one: [
      {
        object: {
          name: $`name`,
          price: $`price`,
          description: $`description`,
          image_urls: $`image_urls`,
          category_display_name: $`category_display_name`,
        },
      },
      {
        id: true,
      },
    ],
  });

  async function handleSubmit() {
    const imageUrls = await Promise.all(files.map(uploadImage));
    const inserted = await insertProduct({
      variables: {
        name,
        price,
        description,
        image_urls: imageUrls,
        category_display_name: categoryDisplayName,
      },
    });
    console.log("Inserted", inserted);
  }

  return (
    <React.Fragment>
      <Head>
        <title>Customers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="content pad-xl">
        <div className="container small">
          <h2 className="mb-sm">Add Product</h2>
          <div className="row">
            <div className="col-12">
              <div className="shadow card pad-sm mb-sm">
                <div className="row mb-xxs">
                  <div className="col-4 pr-xs">
                    <p className="strong mb-xxs">Product Image</p>
                    <DropzoneWithPreview files={files} setFiles={setFiles} />
                  </div>
                  <div className="col-8 pl-xs">
                    <p className="strong mb-xxs">Product Name</p>
                    <input
                      className="w-100 mb-xs"
                      placeholder="Name..."
                      onChange={(e) => setName(e.target.value)}
                    />
                    <p className="strong mb-xxs">Description</p>
                    <textarea
                      className="w-100 mb-xs"
                      rows={8}
                      placeholder="Description..."
                      defaultValue={""}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <div className="row mb-sm">
                      <div className="col-6 pr-xs">
                        <p className="strong mb-xxs">Price</p>
                        <div className="input-start blank">
                          <span>$</span>
                          <input
                            type="number"
                            placeholder="Price..."
                            onChange={(e) =>
                              setPrice(parseFloat(e.target.value))
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <button className="default mr-xs" onClick={handleSubmit}>
                    Save Product
                  </button>
                  <button className="primary">Save Product</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

AdminOrders.Layout = LayoutAdmin;

export default AdminOrders;
