import React, { useState } from 'react';
import { Table } from 'flowbite-react';
import { Button, Textarea, Label, Modal, TextInput, Select, FileInput } from 'flowbite-react';
import Titre from '../../../DefaultLayout/Titre/Titre';
import ReactMarkdown from 'react-markdown'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import MDEditor from "@uiw/react-md-editor";

function TableEvent(props) {
    const [openModal, setOpenModal] = useState(false);
    const [openSeeModal, setOpenSeeModal] = useState(false);
    const [titre, setTitre] = useState('');
    const [sousTitre, setSousTitre] = useState('');
    const [typeEvent, setTypeEvent] = useState('');
    const [themeEvent, setThemeEvent] = useState('');
    const [langue, setLangue] = useState('');
    const [pg, setPg] = useState('');
    const [lieu, setLieu] = useState('');
    const [lien, setLien] = useState('');
    const [desc, setDesc] = useState('');
    const [dateNow, setDateNow] = useState(Date);
    const [dateFin, setDateFin] = useState(Date);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const Form = (e) => {
        e.preventDefault();
        console.log(selectedFile)
        console.log(titre + ' ' + sousTitre + ' ' + typeEvent + ' ' + themeEvent + ' ' + langue + ' ' + pg + ' ' + lieu + ' ' + dateNow + ' ' + dateFin)
        const formData = new FormData();
        formData.append('titre', titre)
        formData.append('soustitre', sousTitre)
        formData.append('typevent', typeEvent)
        formData.append('themevent', themeEvent)
        formData.append('langue', langue)
        formData.append('pg', pg)
        formData.append('lieu', lieu)
        formData.append('datenow', dateNow)
        formData.append('datefin', dateFin)
        formData.append('image', selectedFile);
        console.log(formData)
        setTitre('')
        setSousTitre('')
        setTypeEvent('')
        setThemeEvent('')
        setLangue('')
        setPg('')
        setLieu('')
        setDateNow('')
        setDateFin('')
        setSelectedFile(null)
    }
    return (
        <>
            <div className="p-4 sm:ml-64">
                <Titre titre="Liste des évènements" />
                <div className='pb-4'>
                    <Button color='' className="bg-amber-600 hover:bg-amber-700 text-white" onClick={() => setOpenModal(true)}>Ajouter un évènement</Button>
                    {/* Ce modal est pour crée des évènements */}
                    <Modal show={openModal} size="5xl" popup onClose={() => setOpenModal(false)}>
                        <Modal.Header />
                        <Modal.Body>
                            <form onSubmit={Form}>
                                <div className="space-y-6">
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Remplissez les champs et validez pour créer un évènement</h3>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="image" value="Insérer une image de l'évènement" />
                                        </div>
                                        <FileInput onChange={handleFileChange} id="image" required />
                                    </div>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="titre" value="Titre du évènement" />
                                            </div>
                                            <TextInput onChange={(e) => setTitre(e.target.value)} value={titre} id="titre" required />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="soustitre" value="Sous titre du évènement" />
                                            </div>
                                            <TextInput onChange={(e) => setSousTitre(e.target.value)} value={sousTitre} id="soustitre" type="text" required />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="typeevent" value="Type de l'évènement" />
                                            </div>
                                            <Select onChange={(e) => setTypeEvent(e.target.value)} value={typeEvent} id="typeevent" required>
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>France</option>
                                                <option>Germany</option>
                                            </Select>
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="themeevent" value="Thème de l'évènement" />
                                            </div>
                                            <Select onChange={(e) => setThemeEvent(e.target.value)} value={themeEvent} id="themeevent" required>
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
                                                <Label htmlFor="langue" value="Langue" />
                                            </div>
                                            <Select onChange={(e) => setLangue(e.target.value)} value={langue} id="langue" required>
                                                <option>Anglais</option>
                                                <option>Fançais</option>
                                            </Select>
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="payant_gratuit" value="Payant/Gratuit" />
                                            </div>
                                            <Select onChange={(e) => setPg(e.target.value)} value={pg} id="payant_gratuit" required>
                                                <option>Payant</option>
                                                <option>Gratuit</option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='pb-2'>
                                        <div className="mb-2 block">
                                            <Label htmlFor="description" value="Description de l'évènement" />
                                        </div>
                                        <MDEditor onChange={setDesc} value={desc} data-color-mode="light" />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="lieu" value="Lieu de l'évènement" />
                                        </div>
                                        <TextInput onChange={(e) => setLieu(e.target.value)} value={lieu} id="lieu" required />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="lien" value="Lien d'inscription de l'évènement" />
                                        </div>
                                        <TextInput onChange={(e) => setLien(e.target.value)} value={lien} id="lien" />
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
                                                <Label htmlFor="datefin" value="Date de fin de l'évènement" />
                                            </div>
                                            <TextInput onChange={(e) => setDateFin(e.target.value)} value={dateFin} id="datefin" type='date' required />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <Button type='submit'>Ajouter</Button>
                                    </div>
                                </div>
                            </form>
                        </Modal.Body>
                    </Modal>
                    {/* Ce modal est pour voir des évènements */}
                    <Modal show={openSeeModal} size="5xl" popup onClose={() => setOpenSeeModal(false)}>
                        <Modal.Header />
                        <Modal.Body>
                            <div className="space-y-6">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Détails sur l'évènement :</h3>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="image" value="Image de l'évènement" />
                                    </div>
                                    IMG
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="titre" value="Titre de l'évènement" />
                                    </div>
                                    TITRE
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="soustitre" value="Sous titre de l'évènement" />
                                    </div>
                                    SOUS TITRE
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="typeevent" value="Type de l'évènement" />
                                    </div>
                                    TYPE
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="themeevent" value="Thème de l'évènement" />
                                    </div>
                                    THEME
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="langue" value="Langue" />
                                    </div>
                                    LANGUE
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="payant_gratuit" value="Payant/Gratuit" />
                                    </div>
                                    PAYANT
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="description" value="Description de l'évènement" />
                                    </div>
                                    DESCRIPTION
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="lieu" value="Lieu de l'évènement" />
                                    </div>
                                    LIEU
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="lieu" value="Lien d'inscription de l'évènement" />
                                    </div>
                                    LIEN
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="datenow" value="Date de publication" />
                                    </div>
                                    DATE PUB
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="datefin" value="Date de fin de l'évènement" />
                                    </div>
                                    DATEFIN
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
                            <Table.HeadCell className='bg-green-950 text-white'>Sous-Titre</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white'>Début</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white'>Fin</Table.HeadCell>
                            <Table.HeadCell className='bg-green-950 text-white w-20'>
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
                                <Table.Cell>Date début</Table.Cell>
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

export default TableEvent;