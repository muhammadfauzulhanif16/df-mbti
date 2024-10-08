import React, { useEffect, useState } from 'react'
import { useForm } from '@inertiajs/react'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  NumberInput,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { IconArticle, IconCaretDown, IconCaretUp } from '@tabler/icons-react'
import { Link, RichTextEditor } from '@mantine/tiptap'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'

const Edit = (props) => {
  console.log(props, 'props')
  const [basicTraits, setBasicTraits] = useState([])
  const form = useForm({
    name: props.work.name,
    detail: props.work.detail,
    basic_traits: [],
    'course': props.work.course,
  })
  console.log(form.data, 'form.data')
  console.log(basicTraits, 'basicTraits')
  useEffect(() => {
    const initialTraits = props.basic_traits.slice(0, 8).map((trait, index) => {
      // Check if the current trait is selected in works_basic_traits
      const workTrait = props.work_basic_traits.find(workTrait => workTrait.id === trait.id)
      const isSelected = !!workTrait // Convert to boolean: true if found, false otherwise
      
      return {
        id: trait.id,
        code: trait.code,
        selected: isSelected,
        min_value: isSelected ? workTrait.min_value : 10, // Use workTrait values if selected, otherwise default
        max_value: isSelected ? workTrait.max_value : 50,
        order: Math.floor(index / 2) + 1,
      }
    })
    
    const groupedTraits = initialTraits.reduce((result, value, index, array) => {
      // Group every two traits
      if (index % 2 === 0) result.push(array.slice(index, index + 2))
      return result
    }, [])
    
    setBasicTraits(groupedTraits)
    // form.setData('basic_traits', groupedTraits)
  }, [props.basic_traits, props.works_basic_traits]) // Add dependencies to useEffect
  
  useEffect(() => {
    form.setData('basic_traits', props.work_basic_traits)
  }, [props.work_basic_traits])
  
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      form.put(route('works.update', props.work.id))
    }}>
      <AppLayout title="Tambah Pekerjaan" activeNav="Pekerjaan"
                 authed={props.auth.user}
                 meta={props.meta}>
        <Stack px={160}>
          <Title align="center" mb={32}>Ubah Data Pekerjaan</Title>
          
          <Box mb={32}>
            <Title order={6} mb={8}>Keterangan Nama Tipe Kepribadian:</Title>
            <Grid grow cols={props.basic_traits.length}>
              {props.basic_traits.map((basic_trait) => (
                <Grid.Col key={basic_trait.id}>
                  <Text>{basic_trait.code} - {basic_trait.name}</Text>
                </Grid.Col>
              ))}
            </Grid>
          </Box>
          
          <TextInput
            mb={16}
            leftSection={<IconArticle />}
            styles={{
              label: { marginBottom: 8 },
              input: {
                height: 48,
                borderRadius: 32,
                paddingLeft: 50,
                paddingRight: 16,
              },
              section: { marginLeft: 0, width: 48, height: 48 },
              error: { marginTop: 8 },
            }}
            withAsterisk
            label="Pekerjaan"
            placeholder="Masukkan pekerjaan..."
            value={form.data.name}
            onChange={(e) => form.setData('name', e.target.value)}
          />
          
          <Box>
            <Text fz={14}>Rincian Pekerjaan</Text>
            <RichTextEditor
              mb={8}
              styles={{
                content: {
                  border: '1px solid #dcdcdc',
                },
              }}
              editor={useEditor({
                extensions: [StarterKit, Link, Placeholder.configure({ placeholder: 'Masukkan detail...' })],
                content: form.data.detail,
                onUpdate: ({ editor }) => {
                  form.setData('detail', editor.getHTML())
                },
              })}>
              <RichTextEditor.Toolbar>
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Bold />
                  <RichTextEditor.Italic />
                  <RichTextEditor.Underline />
                  <RichTextEditor.Strikethrough />
                  <RichTextEditor.ClearFormatting />
                  <RichTextEditor.Highlight />
                  <RichTextEditor.Code />
                </RichTextEditor.ControlsGroup>
                
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.H1 />
                  <RichTextEditor.H2 />
                  <RichTextEditor.H3 />
                  <RichTextEditor.H4 />
                </RichTextEditor.ControlsGroup>
                
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Blockquote />
                  <RichTextEditor.Hr />
                  <RichTextEditor.BulletList />
                  <RichTextEditor.OrderedList />
                  <RichTextEditor.Subscript />
                  <RichTextEditor.Superscript />
                </RichTextEditor.ControlsGroup>
                
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Link />
                  <RichTextEditor.Unlink />
                </RichTextEditor.ControlsGroup>
                
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.AlignLeft />
                  <RichTextEditor.AlignCenter />
                  <RichTextEditor.AlignJustify />
                  <RichTextEditor.AlignRight />
                </RichTextEditor.ControlsGroup>
                
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Undo />
                  <RichTextEditor.Redo />
                </RichTextEditor.ControlsGroup>
              </RichTextEditor.Toolbar>
              
              <RichTextEditor.Content
              />
            </RichTextEditor>
          </Box>
          
          <Box>
            <Text fz={14} mb={8}>Mata Kuliah Relevan</Text>
            <RichTextEditor
              styles={{
                content: {
                  border: '1px solid #dcdcdc',
                },
              }}
              editor={useEditor({
                extensions: [StarterKit, Link, Placeholder.configure({ placeholder: 'Masukkan mata kuliah relevan...' })],
                content: form.data.course,
                onUpdate: ({ editor }) => {
                  form.setData('course', editor.getHTML())
                },
              })}>
              <RichTextEditor.Toolbar>
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Bold />
                  <RichTextEditor.Italic />
                  <RichTextEditor.Underline />
                  <RichTextEditor.Strikethrough />
                  <RichTextEditor.ClearFormatting />
                  <RichTextEditor.Highlight />
                  <RichTextEditor.Code />
                </RichTextEditor.ControlsGroup>
                
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.H1 />
                  <RichTextEditor.H2 />
                  <RichTextEditor.H3 />
                  <RichTextEditor.H4 />
                </RichTextEditor.ControlsGroup>
                
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Blockquote />
                  <RichTextEditor.Hr />
                  <RichTextEditor.BulletList />
                  <RichTextEditor.OrderedList />
                  <RichTextEditor.Subscript />
                  <RichTextEditor.Superscript />
                </RichTextEditor.ControlsGroup>
                
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Link />
                  <RichTextEditor.Unlink />
                </RichTextEditor.ControlsGroup>
                
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.AlignLeft />
                  <RichTextEditor.AlignCenter />
                  <RichTextEditor.AlignJustify />
                  <RichTextEditor.AlignRight />
                </RichTextEditor.ControlsGroup>
                
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Undo />
                  <RichTextEditor.Redo />
                </RichTextEditor.ControlsGroup>
              </RichTextEditor.Toolbar>
              
              <RichTextEditor.Content
              />
            </RichTextEditor>
          </Box>
          
          <Box>
            <Text fz={14} mb={8}>Tipe Kepribadian</Text>
            
            {basicTraits.map((basicTraitGroup, basicTraitGroupId) => (
              <SimpleGrid cols={2} mb={16} spacing={32} key={basicTraitGroupId}>
                {basicTraitGroup.map((trait) => {
                  const isAnyTraitSelectedWithSameOrder = form.data.basic_traits.some(t =>
                    t.order === trait.order && t.selected,
                  )
                  
                  return (
                    <Grid key={trait.id} gutter={0} grow>
                      <Grid.Col span={1}>
                        <Flex align="center" h="100%">
                          <Checkbox
                            disabled={(isAnyTraitSelectedWithSameOrder && !trait.selected) || (!trait.selected && basicTraitGroup.some(t => t.selected))}
                            checked={trait.selected}
                            // onChange={(e) => {
                            //   // Update in form.data.basic_traits
                            //   let updatedFormTraits = [...form.data.basic_traits]
                            //   const formIndex = updatedFormTraits.findIndex(t => t.code === trait.code)
                            //   if (e.target.checked) {
                            //     if (formIndex === -1) {
                            //       updatedFormTraits.push({
                            //         ...trait,
                            //         selected: e.target.checked,
                            //       })
                            //     } else {
                            //       updatedFormTraits[formIndex] = {
                            //         ...updatedFormTraits[formIndex],
                            //         selected: e.target.checked,
                            //       }
                            //     }
                            //   } else {
                            //     if (formIndex !== -1) {
                            //       updatedFormTraits.splice(formIndex, 1)
                            //     }
                            //   }
                            //   updatedFormTraits.sort((a, b) => a.order - b.order)
                            //   form.setData('basic_traits', updatedFormTraits)
                            //
                            //   // Update in basicTraits state
                            //   const updatedBasicTraits = basicTraits.map((group, groupId) => {
                            //     if (groupId === basicTraitGroupId) {
                            //       return group.map(t => t.code === trait.code ? {
                            //         ...t,
                            //         selected: e.target.checked,
                            //       } : t)
                            //     }
                            //     return group
                            //   })
                            //   setBasicTraits(updatedBasicTraits)
                            // }}
                            onChange={(e) => {
                              let updatedFormTraits = [...form.data.basic_traits]
                              const formIndex = updatedFormTraits.findIndex(t => t.code === trait.code)
                              
                              if (e.target.checked) {
                                // If checked, add or update the trait in form.data.basic_traits
                                if (formIndex === -1) {
                                  updatedFormTraits.push({
                                    ...trait,
                                    selected: e.target.checked,
                                  })
                                } else {
                                  updatedFormTraits[formIndex] = {
                                    ...updatedFormTraits[formIndex],
                                    selected: e.target.checked,
                                  }
                                }
                              } else {
                                // If unchecked, remove the trait from form.data.basic_traits
                                updatedFormTraits = updatedFormTraits.filter(t => t.code !== trait.code)
                              }
                              
                              updatedFormTraits.sort((a, b) => a.order - b.order)
                              form.setData('basic_traits', updatedFormTraits)
                              
                              // Update in basicTraits state
                              const updatedBasicTraits = basicTraits.map((group, groupId) => {
                                if (groupId === basicTraitGroupId) {
                                  return group.map(t => t.code === trait.code ? {
                                    ...t,
                                    selected: e.target.checked,
                                  } : t)
                                }
                                return group
                              })
                              setBasicTraits(updatedBasicTraits)
                            }}
                            label={trait.code}
                          />
                        </Flex>
                      </Grid.Col>
                      
                      <Grid.Col span={10}>
                        <Flex gap={16}>
                          <NumberInput
                            disabled={!trait.selected}
                            styles={{
                              label: { marginBottom: 8 },
                              input: {
                                height: 48,
                                borderRadius: 32,
                                paddingLeft: 50,
                                paddingRight: 16,
                              },
                              section: { marginLeft: 0, width: 48, height: 48 },
                              error: { marginTop: 8 },
                            }}
                            leftSection={<IconCaretDown />}
                            withAsterisk
                            placeholder={`${trait.min_value}%`}
                            // clampBehavior="strict"
                            min={10}
                            max={50}
                            value={trait.min_value}
                            suffix="%"
                            onChange={(value) => {
                              // Update in basicTraits state
                              const updatedBasicTraits = basicTraits.map((group, groupId) => {
                                if (groupId === basicTraitGroupId) {
                                  return group.map(t => t.code === trait.code ? {
                                    ...t,
                                    min_value: value,
                                  } : t)
                                }
                                return group
                              })
                              setBasicTraits(updatedBasicTraits)
                              
                              // Update in form.data.basic_traits
                              const updatedFormTraits = form.data.basic_traits.map(t => t.code === trait.code ? {
                                ...t,
                                min_value: value,
                              } : t)
                              form.setData('basic_traits', updatedFormTraits)
                            }}
                          />
                          
                          <NumberInput
                            disabled={!trait.selected}
                            styles={{
                              label: { marginBottom: 8 },
                              input: {
                                height: 48,
                                borderRadius: 32,
                                paddingLeft: 50,
                                paddingRight: 16,
                              },
                              section: { marginLeft: 0, width: 48, height: 48 },
                              error: { marginTop: 8 },
                            }}
                            leftSection={<IconCaretUp />}
                            withAsterisk
                            placeholder={`${trait.max_value}%`}
                            // clampBehavior="strict"
                            min={10}
                            max={50}
                            value={trait.max_value}
                            suffix="%"
                            onChange={(value) => {
                              // Update in basicTraits state
                              const updatedBasicTraits = basicTraits.map((group, groupId) => {
                                if (groupId === basicTraitGroupId) {
                                  return group.map(t => t.code === trait.code ? {
                                    ...t,
                                    max_value: value,
                                  } : t)
                                }
                                return group
                              })
                              setBasicTraits(updatedBasicTraits)
                              
                              // Update in form.data.basic_traits
                              const updatedFormTraits = form.data.basic_traits.map(t => t.code === trait.code ? {
                                ...t,
                                max_value: value,
                              } : t)
                              form.setData('basic_traits', updatedFormTraits)
                            }}
                          />
                        </Flex>
                      </Grid.Col>
                    </Grid>
                  )
                })}
              </SimpleGrid>
            ))}
          </Box>
          
          <Flex mt={24} gap={16}>
            <Button h={48}
                    px={16} styles={{ section: { marginRight: 12 } }}
                    radius={32}
                    variant="outline"
                    color="red"
                    disabled={form.processing}
                    fullWidth
                    onClick={() => router.get(route('works.index'))}
            >
              Batal
            </Button>
            <Button h={48}
                    px={16} styles={{ section: { marginRight: 12 } }}
                    radius={32}
              // disabled={form.data.file ? false : form.hasErrors || Object.entries(form.data).some(([key, value]) => key !== 'file' && !value)}
                    fullWidth
                    loading={form.processing}
                    type="submit"
            >
              Simpan
            </Button>
          </Flex>
        </Stack>
      </AppLayout>
    </form>
  )
}

export default Edit
