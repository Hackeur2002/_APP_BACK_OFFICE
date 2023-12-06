import React, { useState } from 'react';
import { Table } from 'flowbite-react';
import { Button, Select, Label, Modal, TextInput } from 'flowbite-react';
import Titre from '../../../DefaultLayout/Titre/Titre';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function TableQuestionReponse(props) {
    const [openModal, setOpenModal] = useState(false);
    const [question, setQuestion] = useState('');
    const [reponse, setReponse] = useState('');
    const [faq, setFaq] = useState('');
    const Form = (e) => {
        e.preventDefault();
        console.log(faq + ' ' + question + ' ' + reponse)
        setQuestion('')
        setReponse('')
        setFaq('')
    }
    return (
        <>
            <div className="p-4 sm:ml-64">
                <Titre titre="Liste des Qestions-Réponses" />
                <div className='pb-4'>
                    <Button color='' className='bg-amber-600 hover:bg-amber-700 text-white' onClick={() => setOpenModal(true)}>Ajouter une question-réponse</Button>
                    <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
                        <Modal.Header />
                        <Modal.Body>
                            <form onSubmit={Form}>
                                <div className="space-y-6">
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Remplissez les champs et validez pour créer une question-réponse</h3>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="question" value="Question" />
                                        </div>
                                        <TextInput onChange={(e) => setQuestion(e.target.value)} value={question} id="question" type="text" required />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="reponse" value="Réponse" />
                                        </div>
                                        <TextInput onChange={(e) => setReponse(e.target.value)} value={reponse} id="reponse" type="text" required />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="faq" value="FAQ" />
                                        </div>
                                        <Select onChange={(e) => setFaq(e.target.value)} value={faq} id="faq" required>
                                            <option>Spécialité 1</option>
                                            <option>Spécialité 2</option>
                                        </Select>
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
                            <Table.HeadCell className='bg-green-950 text-white'>Question</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white'>Réponse</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white'>FAQ</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white w-20'>
                                <span>Actions</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    1
                                </Table.Cell>
                                <Table.Cell>Une question</Table.Cell>
                                <Table.Cell>Une réponse</Table.Cell>
                                <Table.Cell>Une FAQ</Table.Cell>
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

export default TableQuestionReponse;