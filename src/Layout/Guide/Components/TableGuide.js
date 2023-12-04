import React, { useState } from 'react';
import { Table } from 'flowbite-react';
import { Button, FileInput, Label, Modal, TextInput } from 'flowbite-react';
import Titre from '../../../DefaultLayout/Titre/Titre';

function TableGuide(props) {
    const [openModal, setOpenModal] = useState(false);
    const [titre, setTitre] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const Form = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', selectedFile);
        console.log(selectedFile)
        console.log(titre)
        setTitre('')
    }
    return (
        <>
            <div className="p-4 sm:ml-64">
                <Titre titre="Liste des Guides" />
                <div className='pb-4'>
                    <Button color='' className='bg-amber-600 hover:bg-amber-700 text-white' onClick={() => setOpenModal(true)}>Ajouter une guide</Button>
                    <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
                        <Modal.Header />
                        <Modal.Body>
                            <form onSubmit={Form}>
                                <div className="space-y-6">
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Remplissez les champs et validez pour crée une guide</h3>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="image" value="Insérer une icone du guide" />
                                        </div>
                                        <FileInput onChange={handleFileChange} id="image" required />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="titre" value="Titre du guide" />
                                        </div>
                                        <TextInput onChange={(e) => setTitre(e.target.value)} value={titre} id="titre" type="text" required />
                                    </div>
                                    <div className="w-full">
                                        <Button type='submit'>Ajouter</Button>
                                    </div>
                                </div>
                            </form>
                        </Modal.Body>
                    </Modal>
                </div>
                <div className="overflow-x-auto">
                    <Table striped>
                        <Table.Head>
                            <Table.HeadCell className='bg-green-950 text-white'>#</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white'>Icone</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white'>Titre</Table.HeadCell>
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
                                <Table.Cell>Une icone</Table.Cell>
                                <Table.Cell>Un titre</Table.Cell>
                                <Table.Cell>Date création</Table.Cell>
                                <Table.Cell>
                                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        Editer
                                    </a>
                                    /
                                    <a href="#" className="font-medium text-red-600 hover:underline dark:text-cyan-500">
                                        Spprimer
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default TableGuide;