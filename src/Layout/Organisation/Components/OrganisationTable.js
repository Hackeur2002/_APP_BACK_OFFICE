import React, { useState } from 'react';
import { Table } from 'flowbite-react';
import { Button, Checkbox, Label, Modal, TextInput, Select, Textarea, FileInput } from 'flowbite-react';
import ReactMarkdown from 'react-markdown'
import Titre from '../../../DefaultLayout/Titre/Titre';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import MDEditor from "@uiw/react-md-editor";

function OrganisationTable(props) {
    const [openModal, setOpenModal] = useState(false);
    const [openSeeModal, setOpenSeeModal] = useState(false);
    const [desc, setDesc] = useState('');
    const [nom, setNom] = useState('');
    const [website, setWebsite] = useState('');
    const [ville, setVille] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [loc, setLoc] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const Form = (e) => {
        e.preventDefault();
        console.log(selectedFile)
        console.log(desc)
        console.log(nom + ' ' + website + ' ' + ville + ' ' + phone + ' ' + mail + ' ' + loc)
        const formData = new FormData();
        formData.append('image', selectedFile);
        console.log(formData)
        setDesc('')
        setNom('')
        setWebsite('')
        setVille('')
        setPhone('')
        setMail('')
        setLoc('')
        setSelectedFile(null)
    }
    return (
        <>
            <div className="p-4 sm:ml-64">
                <Titre titre="Liste des organisations" />
                <div className='pb-4'>
                    <Button color='' className='bg-amber-600 hover:bg-amber-700 text-white' onClick={() => setOpenModal(true)}>Ajouter une organisation</Button>
                    {/* Ce modal est pour crée une organisation */}
                    <Modal show={openModal} size="5xl" popup onClose={() => setOpenModal(false)}>
                        <Modal.Header />
                        <Modal.Body>
                            <div className="space-y-6">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Remplissez les champs et validez pour créer une organisation</h3>
                                <form onSubmit={Form}>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="logo" value="Logo de l'organisation" />
                                        </div>
                                        <FileInput onChange={handleFileChange} id="logo" required />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="nom" value="Nom de l'organisation" />
                                        </div>
                                        <TextInput onChange={(e) => setNom(e.target.value)} value={nom} id="nom" type="text" required />
                                    </div>
                                    <div className='pb-2'>
                                        <div className="mb-2 block">
                                            <Label htmlFor="description" value="Description de l'organisation" />
                                        </div>
                                        <MDEditor onChange={setDesc} value={desc} data-color-mode="light" />
                                    </div>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="site" value="Lien du site web de l'organisation" />
                                            </div>
                                            <TextInput onChange={(e) => setWebsite(e.target.value)} value={website} id="site" type="text" required />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="ville" value="Ville de l'organisation" />
                                            </div>
                                            <TextInput onChange={(e) => setVille(e.target.value)} value={ville} id="ville" type="text" required />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="phone" value="Téléphone de l'organisation" />
                                            </div>
                                            <TextInput onChange={(e) => setPhone(e.target.value)} value={phone} id="phone" type="text" required />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="email" value="Email de l'organisation" />
                                            </div>
                                            <TextInput onChange={(e) => setMail(e.target.value)} value={mail} id="email" type="email" required />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="localisation" value="Localisation" />
                                        </div>
                                        <TextInput onChange={(e) => setLoc(e.target.value)} value={loc} id="localisation" type="text" required />
                                    </div>
                                    <div className="w-full pt-2">
                                        <Button type='submit'>Ajouter</Button>
                                    </div>
                                </form>
                            </div>
                        </Modal.Body>
                    </Modal>
                    {/* Ce modal est pour voir une organisation */}
                    <Modal show={openSeeModal} size="5xl" popup onClose={() => setOpenSeeModal(false)}>
                        <Modal.Header />
                        <Modal.Body>
                            <div className="space-y-6">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Détails sur l'organisation :</h3>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="logo" value="Logo de l'organisation" />
                                    </div>
                                    LOGO
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="nom" value="Nom de l'organisation" />
                                    </div>
                                    NOM
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="description" value="Description de l'organisation" />
                                    </div>
                                    DESCRIPTION
                                </div>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="site" value="Lien du site web de l'organisation" />
                                        </div>
                                        SITE WEB
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="ville" value="Ville de l'organisation" />
                                        </div>
                                        VILLE
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="phone" value="Téléphone de l'organisation" />
                                        </div>
                                        TELEPHONE
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="email" value="Email de l'organisation" />
                                        </div>
                                        EMAIL
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="localisation" value="Localisation" />
                                        </div>
                                        LOCALISATION
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="datecreation" value="Date de création" />
                                        </div>
                                        DATE CREATION
                                    </div>
                                </div>
                                
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
                <div className="overflow-x-auto">
                    <Table striped>
                        <Table.Head>
                            <Table.HeadCell className='bg-green-950 text-white'>#</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white'>Logo</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white'>Nom</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white'>Email</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white'>Phone</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white w-20'>
                                <span>Actions</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    1
                                </Table.Cell>
                                <Table.Cell>Un logo</Table.Cell>
                                <Table.Cell>Un nom</Table.Cell>
                                <Table.Cell>Un email</Table.Cell>
                                <Table.Cell>Une Phone</Table.Cell>
                                <Table.Cell>
                                    <div className='flex flex-row'>
                                        <Button color='' className="bg-amber-600 hover:bg-amber-700 text-white"><EditIcon /></Button>&nbsp;&nbsp;&nbsp;
                                        <Button color='' className="bg-red-600 hover:bg-red-700 text-white"><DeleteForeverIcon /></Button>&nbsp;&nbsp;&nbsp;
                                        <Button color='' className="bg-amber-600 hover:bg-amber-700 text-white" onClick={() => setOpenSeeModal(true)}><VisibilityIcon /></Button>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default OrganisationTable;