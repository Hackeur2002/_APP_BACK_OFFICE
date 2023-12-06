import React, { useState } from 'react';
import { Table } from 'flowbite-react';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import Titre from '../../../DefaultLayout/Titre/Titre';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function TableSecteur(props) {
    const [openModal, setOpenModal] = useState(false);
    const [code, setCode] = useState('');
    const [libelle, setLibelle] = useState('');
    const Form = (e) => {
        e.preventDefault();
        console.log(code + ' ' + libelle)
        setCode('')
        setLibelle('')
    }
    return (
        <>
            <div className="p-4 sm:ml-64">
                <Titre titre="Liste des secteurs" />
                <div className='pb-4'>
                    <Button color='' className='bg-amber-600 hover:bg-amber-700 text-white' onClick={() => setOpenModal(true)}>Ajouter un secteur</Button>
                    <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
                        <Modal.Header />
                        <Modal.Body>
                            <form onSubmit={Form}>
                                <div className="space-y-6">
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Remplissez les champs et validez pour créer un secteur</h3>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="code" value="Code du secteur" />
                                        </div>
                                        <TextInput onChange={(e) => setCode(e.target.value)} value={code} id="code" placeholder="Transport" required />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="libelle" value="Libellé du secteur" />
                                        </div>
                                        <TextInput onChange={(e) => setLibelle(e.target.value)} value={libelle} id="libelle" placeholder="Transports et logistiques" type="text" required />
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
                            <Table.HeadCell className='bg-green-950 text-white w-20'>
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
                                    <div className='flex flex-row'>
                                        <Button color='' className="bg-amber-600 hover:bg-amber-700 text-white"><EditIcon /></Button>&nbsp;&nbsp;&nbsp;
                                        <Button color='' className="bg-red-600 hover:bg-red-700 text-white"><DeleteForeverIcon /></Button>
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

export default TableSecteur;