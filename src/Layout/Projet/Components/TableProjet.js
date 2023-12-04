import React, { useState } from 'react';
import { Table } from 'flowbite-react';
import { Button, Checkbox, Label, Modal, TextInput, Select, Textarea, FileInput } from 'flowbite-react';
import ReactMarkdown from 'react-markdown'
import Titre from '../../../DefaultLayout/Titre/Titre';

function TableProjet() {
    const [openModal, setOpenModal] = useState(false);
    const [openSeeModal, setOpenSeeModal] = useState(false);
    const [desc, setDesc] = useState('');
    const [titre, setTitre] = useState('');
    const [sousTitre, setSousTitre] = useState('');
    const [status, setStatus] = useState('Ouvert');
    const [secteur, setSecteur] = useState('');
    const [soutien, setSoutien] = useState('');
    const [org, setOrg] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [dateNow, setDateNow] = useState(Date);
    const [dateFin, setDateFin] = useState(Date);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const Form = (e) => {
        e.preventDefault();
        console.log(selectedFile)
        console.log(desc)
        console.log(titre + ' ' + sousTitre + ' ' + status + ' ' + secteur + ' ' + soutien + ' ' + org + ' ' + dateNow + ' ' + dateFin)
        const formData = new FormData();
        formData.append('image', selectedFile);
        console.log(formData)
        setDesc('')
        setTitre('')
        setSousTitre('')
        setStatus('')
        setSecteur('')
        setSoutien('')
        setOrg('')
        setDateNow('')
        setDateFin('')
        setSelectedFile(null)
    }
    return (
        <>
            <div className="p-4 sm:ml-64">
                <Titre titre="Liste des projets" />
            <div className='pb-4'>
                    <Button color='' className='bg-amber-600 hover:bg-amber-700 text-white' onClick={() => setOpenModal(true)}>Ajouter un projet</Button>
                    {/* Ce modal est pour crée un projet */}
                    <Modal show={openModal} size="5xl" popup onClose={() => setOpenModal(false)}>
                        <Modal.Header />
                        <Modal.Body>
                            <div className="space-y-6">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Remplissez les champs et validez pour crée un projet</h3>
                                <form onSubmit={Form}>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="image" value="Insérer une image du projet" />
                                        </div>
                                        <FileInput onChange={handleFileChange} id="image" required />
                                    </div>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="titre" value="Titre du projet" />
                                            </div>
                                            <TextInput onChange={(e) => setTitre(e.target.value)} value={titre} id="titre" required />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="soustitre" value="Sous titre du projet" />
                                            </div>
                                            <TextInput onChange={(e) => setSousTitre(e.target.value)} value={sousTitre} id="soustitre" type="text" required />
                                        </div>
                                    </div>
                                    <div className='pb-2'>
                                        <div className="mb-2 block">
                                            <Label htmlFor="description" value="Description du projet" />
                                        </div>
                                        <Textarea onChange={(e) => setDesc(e.target.value)} value={desc} id="description" type="text" required />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="description" value="Aperçu" />
                                        </div>
                                        <ReactMarkdown className='prose lg:prose-xl bg-gray-200 w-full p-2'>{desc}</ReactMarkdown>
                                    </div>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="status" value="Status du projet" />
                                            </div>
                                            <TextInput onChange={(e) => setStatus(e.target.value)} id="status" type="text" value="Ouvert" required disabled />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="secteur" value="Secteur" />
                                            </div>
                                            <Select onChange={(e) => setSecteur(e.target.value)} value={secteur} id="secteur" required>
                                                <option>Secteur 1</option>
                                                <option>Secteur 2</option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="soutien" value="Type de soutien" />
                                            </div>
                                            <Select onChange={(e) => setSoutien(e.target.value)} value={soutien} id="soutien" required>
                                                <option>Soutien 1</option>
                                                <option>Soutien 2</option>
                                            </Select>
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="organisation" value="Organisation" />
                                            </div>
                                            <Select onChange={(e) => setOrg(e.target.value)} value={org} id="organisation" required>
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>France</option>
                                                <option>Germany</option>
                                            </Select>
                                        </div>
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
                                                <Label htmlFor="datefin" value="Date de fin du projet" />
                                            </div>
                                            <TextInput onChange={(e) => setDateFin(e.target.value)} value={dateFin} id="datefin" type='date' required />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <Button type='submit'>Ajouter</Button>
                                    </div>
                                </form>
                            </div>
                        </Modal.Body>
                    </Modal>
                    {/* Ce modal est pour voir un projet */}
                    <Modal show={openSeeModal} size="5xl" popup onClose={() => setOpenSeeModal(false)}>
                        <Modal.Header />
                        <Modal.Body>
                            <div className="space-y-6">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Détails sur le projet :</h3>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="image" value="Image du projet" />
                                    </div>
                                    IMAGE
                                </div>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="titre" value="Titre du projet" />
                                        </div>
                                        TITRE
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="soustitre" value="Sous titre du projet" />
                                        </div>
                                        SOUS TITRE
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="description" value="Description du projet" />
                                    </div>
                                    DESCRIPTION
                                </div>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="status" value="Status du projet" />
                                        </div>
                                        STATUS
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="secteur" value="Secteur" />
                                        </div>
                                        SECTEUR
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="soutien" value="Type de soutien" />
                                        </div>
                                        SOUTIEN
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="organisation" value="Organisation" />
                                        </div>
                                        ORGANISATION
                                    </div>
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
                                            <Label htmlFor="datefin" value="Date de fin du projet" />
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
                            <Table.HeadCell className='bg-green-950 text-white'>Titre</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white'>Sous-titre</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white'>Status</Table.HeadCell>
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
                                <Table.Cell>Une status</Table.Cell>
                                <Table.Cell>
                                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        Editer
                                    </a>
                                     / 
                                    <a href="#" className="font-medium text-red-600 hover:underline dark:text-cyan-500">
                                        Spprimer
                                    </a>
                                    <Button color='' className='bg-amber-600 hover:bg-amber-700 text-white' onClick={() => setOpenSeeModal(true)}>Voir</Button>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default TableProjet;