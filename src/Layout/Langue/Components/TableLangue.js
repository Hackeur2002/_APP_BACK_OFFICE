import React, { useState } from 'react';
import { Table } from 'flowbite-react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import Titre from '../../../DefaultLayout/Titre/Titre';

function TableLangue(props) {
    const [openModal, setOpenModal] = useState(false);
    const [code, setCode] = useState('');
    const [libelle, setLibelle] = useState('');
    const Form = (e) => {
        e.preventDefault();
        console.log(code+' '+libelle)
        setCode('')
        setLibelle('')
    }
    return (
        <>
            <div className="p-4 sm:ml-64">
                <Titre titre="Liste des langues" />
                <div className='pb-4'>
                    <Button color='' className='bg-amber-600 hover:bg-amber-700 text-white' onClick={() => setOpenModal(true)}>Ajouter une langue</Button>
                    <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
                        <Modal.Header />
                        <Modal.Body>
                            <form onSubmit={Form}>
                                <div className="space-y-6">
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Remplissez les champs et validez pour crée une langue</h3>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="code" value="Code de la langue" />
                                        </div>
                                        <TextInput 
                                            id="code" 
                                            placeholder="FR" 
                                            required
                                            onChange={(e) => setCode(e.target.value)}
                                            value={code}
                                        />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="libelle" value="Libellé de la langue" />
                                        </div>
                                        <TextInput 
                                            id="libelle" 
                                            placeholder="Français" 
                                            type="text" 
                                            required
                                            onChange={(e) => setLibelle(e.target.value)}
                                            value={libelle}
                                        />
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
                            <Table.HeadCell className='bg-green-950 text-white'>Code</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white'>Libellé</Table.HeadCell>
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
                                <Table.Cell>Un code</Table.Cell>
                                <Table.Cell>Un libellé</Table.Cell>
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

export default TableLangue;