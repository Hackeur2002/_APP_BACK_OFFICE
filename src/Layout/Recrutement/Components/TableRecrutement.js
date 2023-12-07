import React, { useState } from 'react';
import { Table } from 'flowbite-react';
import { Button, Label, Modal, TextInput, Select, Textarea } from 'flowbite-react';
import ReactMarkdown from 'react-markdown'
import Titre from '../../../DefaultLayout/Titre/Titre';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import MDEditor from "@uiw/react-md-editor";

function TableRecrutement(props) {
    const [openModal, setOpenModal] = useState(false);
    const [openSeeModal, setOpenSeeModal] = useState(false);
    const [poste, setPoste] = useState('');
    const [desc, setDesc] = useState('');
    const [type, setType] = useState('');
    const [special, setSpecial] = useState('');
    const [region, setRegion] = useState('');
    const [lieu, setLieu] = useState('');
    const [mail, setMail] = useState('');
    const [dateNow, setDateNow] = useState(Date);
    const [dateFin, setDateFin] = useState(Date);
    const Form = (e) => {
        e.preventDefault();
        console.log(poste + ' ' + desc + ' ' + type + ' ' + special + ' ' + region + ' ' + ' ' + lieu + ' ' + dateNow + ' ' + dateFin)
        
        setPoste('')
        setDesc('')
        setType('')
        setSpecial('')
        setRegion('')
        setLieu('')
        setDateNow('')
        setDateFin('')
    }
    return (
        <>
            <div className="p-4 sm:ml-64">
                <Titre titre="Liste des offres d'emplois" />
                <div className='pb-4'>
                    <Button color='' className='bg-amber-600 hover:bg-amber-700 text-white' onClick={() => setOpenModal(true)}>Ajouter une offre d'emploi</Button>
                    {/* Ce modal est pour crée un offre d'emploi */}
                    <Modal show={openModal} size="5xl" popup onClose={() => setOpenModal(false)}>
                        <Modal.Header />
                        <Modal.Body>
                            <div className="space-y-6">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Remplissez les champs et validez pour créer une offre d'emploi</h3>
                                <form onSubmit={Form}>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="poste" value="Poste" />
                                        </div>
                                        <TextInput onChange={(e) => setPoste(e.target.value)} value={poste} id="poste" required />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="description" value="Description du poste" />
                                        </div>
                                        <MDEditor onChange={setDesc} value={desc} data-color-mode="light" />
                                    </div>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="typeemploi" value="Type de l'emploi" />
                                            </div>
                                            <Select onChange={(e) => setType(e.target.value)} value={type} id="typeemploi" required>
                                                <option>CDD</option>
                                                <option>CDI</option>
                                            </Select>
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="specialite" value="Spécialité" />
                                            </div>
                                            <Select onChange={(e) => setSpecial(e.target.value)} value={special} id="specialite" required>
                                                <option>Spécialité 1</option>
                                                <option>Spécialité 2</option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="lieu" value="Lieu" />
                                            </div>
                                            <TextInput onChange={(e) => setLieu(e.target.value)} value={lieu} id="lieu" type="text" required />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="region" value="Région" />
                                            </div>
                                            <TextInput onChange={(e) => setRegion(e.target.value)} value={region} id="region" type="text" required />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="mail" value="Adresse mail de réception" />
                                        </div>
                                        <TextInput onChange={(e) => setMail(e.target.value)} value={mail} id="mail" type="text" required />
                                    </div>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="datenow" value="Date de publication" />
                                            </div>
                                            <TextInput onChange={(e) => setDateNow(e.target.value)} value={dateNow} id="datenow" type='date' required />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="datefin" value="Date de fin de l'offre d'emploi" />
                                            </div>
                                            <TextInput onChange={(e) => setDateFin(e.target.value)} value={dateFin} id="datefin" type='date' required />
                                        </div>
                                    </div>
                                    <div className="w-full pt-3">
                                        <Button type='submit'>Ajouter</Button>
                                    </div>
                                </form>
                            </div>
                        </Modal.Body>
                    </Modal>
                    {/* Ce modal est pour voir un offre d'emploi */}
                    <Modal show={openSeeModal} size="5xl" popup onClose={() => setOpenSeeModal(false)}>
                        <Modal.Header />
                        <Modal.Body>
                            <div className="space-y-6">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Détails sur l'offre d'emploi :</h3>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="poste" value="Poste" />
                                    </div>
                                    POSTE
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="description" value="Description du poste" />
                                    </div>
                                    DESCRIPTION
                                </div>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="typeemploi" value="Type de l'emploi" />
                                        </div>
                                        TYPE EMPLOI
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="specialite" value="Spécialité" />
                                        </div>
                                        SPECIALITE
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="lieu" value="Lieu" />
                                        </div>
                                        LIEU
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="region" value="Région" />
                                        </div>
                                        SPECIALITE
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="descriptionSalaire" value="Description du salaire" />
                                    </div>
                                    DESCRIPTION SALAIRE
                                </div>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="datenow" value="Date de publication" />
                                        </div>
                                        DATE PUB
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="datefin" value="Date de fin de l'offre d'emploi" />
                                        </div>
                                        DATE FIN
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
                            <Table.HeadCell className='bg-green-950 text-white'>Poste</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white'>Description</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white'>Crée le</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white'>Date fin</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white w-20'>
                                <span>Actions</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    1
                                </Table.Cell>
                                <Table.Cell>Un poste</Table.Cell>
                                <Table.Cell>Une description</Table.Cell>
                                <Table.Cell>Date création</Table.Cell>
                                <Table.Cell>Date fin</Table.Cell>
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

export default TableRecrutement;