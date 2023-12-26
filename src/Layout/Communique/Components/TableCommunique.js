import React, { useState, useEffect } from 'react';
import { Table } from 'flowbite-react';
import { Button, Label, Modal, TextInput, FileInput } from 'flowbite-react';
import Titre from '../../../DefaultLayout/Titre/Titre';
import ReactMarkdown from 'react-markdown'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import MDEditor from "@uiw/react-md-editor";
import axios from 'axios'

const urlstandart = process.env.REACT_APP_URL_STANDART

function TableCommunique(props) {
    const [openModal, setOpenModal] = useState(false);
    const [titre, setTitre] = useState('');
    const [sousTitre, setSousTitre] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFile2, setSelectedFile2] = useState(null);
    const [desc, setDesc] = useState('');
    const [openSeeModal, setOpenSeeModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [imageSelect, setImageSelect] = useState(null);
    const [communiques, setCommuniques] = useState([]);
    const [imgPath, setImgPath] = useState([]);
    const [actualiteId, setActualiteId] = useState([]);
    const [dateNow, setDateNow] = useState(Date);

    const handleCloseEditModal = () => {
        setOpenEditModal(false)
        setTitre('')
        setSousTitre('')
        setDesc('')
        setSelectedFile(null)
        setSelectedFile2(null)
    }
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const handleFileChange2 = (event) => {
        setSelectedFile2(event.target.files[0]);
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                // Mettre à jour l'état de l'image avec l'URL de l'image convertie en base64
                setImageSelect(reader.result);
            };

            reader.readAsDataURL(file);
        }
    }
    const handleEdit = (id, action) => {
        const intid = parseInt(id, 10)
        const communiqueChoose = communiques.filter((el) => el.id === intid)
        if (action == "delete") {
            const newurl = process.env.REACT_APP_URL_STANDART + `api/communiques/${intid}`
            if (window.confirm("Voulez-vous vraiment supprimer cet enregistrement de communiqué ? Cet action est irréverssible") == true) {
                axios.delete(newurl, { withCredentials: true })
                    .then(response => {
                        let monid = communiqueChoose.map((ed) => {
                            return ed.actualite.id
                        })
                        const newurl = process.env.REACT_APP_URL_STANDART + `api/actualities/${monid}`
                        axios.delete(newurl, { withCredentials: true })
                            .then(res => {
                                alert('Communiqué supprimer')
                                window.location.reload()
                            })
                            .catch(err => {
                                alert('Erreur lors de la suppression')
                            })
                    })
                    .catch(err => {
                        alert('Erreur lors de la suppression de le spécialité')
                    })
            }
        } else {
            communiqueChoose.map((ev) => {
                let imginfo = ev.actualite.image
                let tabimg = []
                tabimg = imginfo.split(',')
                imginfo = tabimg[0]
                imginfo = imginfo.replace(/\\/g, "/")
                setImgPath(imginfo)
                setTitre(ev.actualite.title)
                setSousTitre(ev.actualite.subTitle)
                setDesc(ev.actualite.description)
                const dn = new Date(ev.createdAt)
                setDateNow(dn.toISOString().split('T')[0])
                setActualiteId(ev.actualite.id)
            })
            if (action == "edit") {
                setOpenEditModal(true)
            } else {
                setOpenSeeModal(true)
            }

        }

        // const newurl = process.env.REACT_APP_URL_STANDART + `api/specialites/${intid}`
        // axios.get(newurl)
        //     .then(response => {
        //         alert('Spécialité récupérer')
        //         setOpenEditModal(true)
        //         console.log(response.data.data)

        //         setCode(response.data.data.codeSpecialite)
        //         setLibelle(response.data.data.libelleSpecialite)

        //     })
        //     .catch(err => {
        //         alert('Erreur lors de la récupération du thème d\'évènement')
        //     })

    }
    const FormEdit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (window.confirm("Voulez-vous vraiment éffectuer cette modification de ce communiqué ?") == true) {
            if(titre.trim() != "")
            {
                formData.append('title', titre)
            }
            if(sousTitre.trim() != "")
            {
                formData.append('subTitle', sousTitre)
            }
            formData.append('etiquette', 'COMMUNIQUE')
            if(desc != "")
            {
                formData.append('description', desc)
            }
            if(selectedFile2){
                formData.append('image', selectedFile2);
            }
            const newurl = process.env.REACT_APP_URL_STANDART + `api/actualities/${actualiteId}`
            axios.put(newurl, formData, { withCredentials: true })
                .then(response => {
                    //alert('Thème enregistrer')
                    //alert("Après enreg Actualite")
                    //console.log(response.data.data)
                    const newurl = process.env.REACT_APP_URL_STANDART + "api/communiques"
                    formData.append('status', "communiqué")
                    formData.append('content', "content")
                    if(selectedFile){
                        formData.append('ressource', selectedFile);
                    }
                    
                    formData.append('actualiteId', response.data.data.id)
                    axios.put(newurl, formData, { withCredentials: true })
                        .then(response => {
                            // setEventId(0)
                            // setTitre('')
                            // setSousTitre('')
                            // setTypeEvent(0)
                            // setThemeEvent(0)
                            // setLangue(0)
                            // setPg('')
                            // setLieu('')
                            // setDateNow('')
                            // setDateFin('')
                            // setSelectedFile(null)
                            alert("Communiqué modifier")
                            console.log(response.data.data)
                            window.location.reload()
                        })
                        .catch(err => {
                            alert('Vérifiez vos informations')
                        })
                })
                .catch(err => {
                    alert('Vérifiez vos informations')
                })
        }

    }
    const Form = (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (window.confirm("Voulez-vous vraiment éffectuer cet enregistrement du communiqué ?") == true) {
            formData.append('title', titre)
            formData.append('subTitle', sousTitre)
            formData.append('etiquette', 'COMMUNIQUE')
            formData.append('description', desc)
            formData.append('image', selectedFile2);
            const newurl = process.env.REACT_APP_URL_STANDART + "api/actualities"
            axios.post(newurl, formData, { withCredentials: true })
                .then(response => {
                    const newurl = process.env.REACT_APP_URL_STANDART + "api/communiques"
                    formData.append('status', "communiqué")
                    formData.append('content', "content")
                    formData.append('ressource', selectedFile2);
                    formData.append('actualiteId', response.data.data.id)
                    axios.post(newurl, formData, { withCredentials: true })
                        .then(response => {
                            // setTitre('')
                            // setSousTitre('')
                            // setTypeEvent(0)
                            // setThemeEvent(0)
                            // setLangue(0)
                            // setPg('')
                            // setLieu('')
                            // setDateNow('')
                            // setDateFin('')
                            // setSelectedFile(null)
                            alert("Communiqué enregistrer")
                            window.location.reload()
                        })
                        .catch(err => {
                            alert('Vérifiez vos informations')
                        })
                })
                .catch(err => {
                    alert('Vérifiez vos informations')
                })
        }
    }
    useEffect(() => {
        const newurl = process.env.REACT_APP_URL_STANDART + "api/communiques"
        axios.get(newurl, { withCredentials: true })
            .then(response => {
                setCommuniques(response.data.data)
            })
            .catch(err => {
                alert('Erreur lors de la récupération des informations')
            })
    }, [])
    return (
        <>
            <div className="p-4 sm:ml-64">
                <Titre titre="Liste des communiqués" />
                <div className='pb-4'>
                    <Button color='' className='bg-amber-600 hover:bg-amber-700 text-white' onClick={() => setOpenModal(true)}>Ajouter un communiqué</Button>
                    {/* Ce modal est pour crée un communiqué */}
                    <Modal show={openModal} size="5xl" popup onClose={() => setOpenModal(false)}>
                        <Modal.Header />
                        <Modal.Body>
                            <div className="space-y-6">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Remplissez les champs et validez pour créer un communiqué</h3>
                                <form onSubmit={Form}>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="image2" value="Insérer une image du communiqué" />
                                        </div>
                                        <FileInput onChange={handleFileChange2} id="image2" required />
                                    </div>
                                    {selectedFile2 ? (
                                        <div>
                                            <img src={imageSelect} alt="Image sélectionnée" style={{ maxWidth: '20%', marginTop: '10px' }} />
                                        </div>
                                    ) : ("")}
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="titre" value="Titre du communiqué" />
                                            </div>
                                            <TextInput onChange={(e) => setTitre(e.target.value)} value={titre} id="titre" required />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="soustitre" value="Sous titre du communiqué" />
                                            </div>
                                            <TextInput onChange={(e) => setSousTitre(e.target.value)} value={sousTitre} id="soustitre" type="text" required />
                                        </div>
                                    </div>
                                    <div className='pb-2'>
                                        <div className="mb-2 block">
                                            <Label htmlFor="description" value="Description du communiqué" />
                                        </div>
                                        <MDEditor onChange={setDesc} value={desc} data-color-mode="light" />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="image" value="Insérer une pièce jointe" />
                                        </div>
                                        <FileInput onChange={handleFileChange} id="image" required />
                                    </div>
                                    
                                    <div className="w-full pt-3">
                                        <Button type='submit'>Ajouter</Button>
                                    </div>
                                </form>
                            </div>
                        </Modal.Body>
                    </Modal>
                    {/* Ce modal est pour éditer un communiqué */}
                    <Modal show={openEditModal} size="5xl" popup onClose={() => handleCloseEditModal()}>
                        <Modal.Header />
                        <Modal.Body>
                            <div className="space-y-6">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Remplissez les champs et validez pour créer un communiqué</h3>
                                <form onSubmit={FormEdit}>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="image2" value="Insérer une image du communiqué" />
                                        </div>
                                        <FileInput onChange={handleFileChange2} id="image2" />
                                    </div>
                                    {selectedFile ? (
                                        <div>
                                            <img src={imageSelect} alt="Image sélectionnée" style={{ maxWidth: '20%', marginTop: '10px' }} />
                                        </div>
                                    ) : ("")}
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="titre" value="Titre du communiqué" />
                                            </div>
                                            <TextInput onChange={(e) => setTitre(e.target.value)} value={titre} id="titre" required />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="soustitre" value="Sous titre du communiqué" />
                                            </div>
                                            <TextInput onChange={(e) => setSousTitre(e.target.value)} value={sousTitre} id="soustitre" type="text" required />
                                        </div>
                                    </div>
                                    <div className='pb-2'>
                                        <div className="mb-2 block">
                                            <Label htmlFor="description" value="Description du communiqué" />
                                        </div>
                                        <MDEditor onChange={setDesc} value={desc} data-color-mode="light" required/>
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="image" value="Insérer une pièce jointe" />
                                        </div>
                                        <FileInput onChange={handleFileChange} id="image" />
                                    </div>

                                    <div className="w-full pt-3">
                                        <Button type='submit'>Modifier</Button>
                                    </div>
                                </form>
                            </div>
                        </Modal.Body>
                    </Modal>
                    {/* Ce modal est pour voir un communiqué */}
                    <Modal show={openSeeModal} size="5xl" popup onClose={() => setOpenSeeModal(false)}>
                        <Modal.Header />
                        <Modal.Body>
                            <div className="space-y-6">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Remplissez les champs et validez pour créer un communiqué</h3>
                                <form>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="image" value="Image du communiqué" />
                                        </div>
                                        <img crossorigin="anonymous" src={`${urlstandart}api/${imgPath}`} alt="Votre texte alternatif" />
                                    </div>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="titre" value="Titre du communiqué" />
                                            </div>
                                            {titre}
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="soustitre" value="Sous titre du communiqué" />
                                            </div>
                                            {sousTitre}
                                        </div>
                                    </div>
                                    <div className='pb-2'>
                                        <div className="mb-2 block">
                                            <Label htmlFor="description" value="Description de l'organisation" />
                                        </div>
                                        <ReactMarkdown className='w-full max-w-none'>
                                            {desc}
                                        </ReactMarkdown>
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="image" value="Date de publication" />
                                        </div>
                                        {dateNow}
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="image" value="Insérer une pièce jointe" />
                                        </div>
                                        PIECE JOINTE
                                    </div>
                                </form>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
                <div className="overflow-x-auto">
                    <Table striped>
                        <Table.Head>
                            <Table.HeadCell className='bg-green-950 text-white'>#</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white'>Image</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white'>Titre</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white'>Sous-Titre</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white w-20'>
                                <span>Actions</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {communiques.length > 0 ?
                                communiques.map((cm, index) => {
                                    let imginfo = cm.actualite.image
                                    let tabimg = []
                                    tabimg = imginfo.split(',')
                                    imginfo = tabimg[0]
                                    imginfo = imginfo.replace(/\\/g, "/")
                                    return (
                                        <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {cm.id}
                                            </Table.Cell>
                                            <Table.Cell><img crossorigin="anonymous" width="50" height="50" src={`${urlstandart}api/${imginfo}`} alt="Image" /></Table.Cell>
                                            <Table.Cell>{cm.actualite.title}</Table.Cell>
                                            <Table.Cell>{cm.actualite.subTitle}</Table.Cell>
                                            <Table.Cell>
                                                <div className='flex flex-row'>
                                                    <Button color='' className="bg-amber-600 hover:bg-amber-700 text-white" onClick={() => handleEdit(cm.id, "edit")}><EditIcon /></Button>&nbsp;&nbsp;&nbsp;
                                                    <Button color='' className="bg-red-600 hover:bg-red-700 text-white" onClick={() => handleEdit(cm.id, "delete")}><DeleteForeverIcon /></Button>&nbsp;&nbsp;&nbsp;
                                                    <Button color='' className="bg-amber-600 hover:bg-amber-700 text-white" onClick={() => handleEdit(cm.id, "visible")}><VisibilityIcon /></Button>
                                                </div>
                                            </Table.Cell>
                                        </Table.Row>
                                    )
                                }) :
                                ("Aucun communiqué n'est enregistrer pour le moment")}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default TableCommunique;