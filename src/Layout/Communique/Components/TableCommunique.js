import React, { useState } from 'react';
import { Table } from 'flowbite-react';
import { Button, Textarea, Label, Modal, TextInput, FileInput } from 'flowbite-react';
import Titre from '../../../DefaultLayout/Titre/Titre';
import ReactMarkdown from 'react-markdown'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import MDEditor from "@uiw/react-md-editor";

function TableCommunique(props) {
    const [openModal, setOpenModal] = useState(false);
    const [titre, setTitre] = useState('');
    const [sousTitre, setSousTitre] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [desc, setDesc] = useState('');
    const [openSeeModal, setOpenSeeModal] = useState(false);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const Form = (e) => {
        e.preventDefault();
        console.log(selectedFile)
        const formData = new FormData();
        formData.append('titre', titre)
        formData.append('soustitre', sousTitre)
        formData.append('image', selectedFile);
        console.log(formData)
        setTitre('')
        setSousTitre('')
        setSelectedFile(null)
    }
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
                    {/* Ce modal est pour voir un communiqué */}
                    <Modal show={openSeeModal} size="5xl" popup onClose={() => setOpenSeeModal(false)}>
                        <Modal.Header />
                        <Modal.Body>
                            <div className="space-y-6">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Remplissez les champs et validez pour créer un communiqué</h3>
                                <form onSubmit={Form}>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="titre" value="Titre du communiqué" />
                                            </div>
                                            TITRE
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="soustitre" value="Sous titre du communiqué" />
                                            </div>
                                            SOUS TITRE
                                        </div>
                                    </div>
                                    <div className='pb-2'>
                                        <div className="mb-2 block">
                                            <Label htmlFor="description" value="Description de l'organisation" />
                                        </div>
                                        DESCRIPTION
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="image" value="Insérer une pièce jointe" />
                                        </div>
                                        PIECE JOINTE
                                    </div>

                                    <div className="w-full pt-3">
                                        <Button type='submit'>Ajouter</Button>
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
                            <Table.HeadCell className='bg-green-950 text-white'>Titre</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white'>Sous-Titre</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white'>Crée le</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white w-10'>
                                <span>Actions</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    1
                                </Table.Cell>
                                <Table.Cell>Un titre</Table.Cell>
                                <Table.Cell>Un sous titre</Table.Cell>
                                <Table.Cell>Date création</Table.Cell>
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

export default TableCommunique;